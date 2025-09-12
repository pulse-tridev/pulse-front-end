"use client";

import { useDeleteUser } from "../hooks/useDeleteUser";
import { useToast } from "@core/hooks/useToast";
import { useState } from "react";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Alert,
  Card,
  CardContent,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useUsers } from "../hooks/useUsers";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { UserService } from "../services/user.service";

export default function UsersListClient() {
  const {
    data: usersResponse,
    isLoading,
    error,
  } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: UserService.getAll,
  });

  const deleteUserMutation = useDeleteUser();
  const { success } = useToast();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await deleteUserMutation.mutateAsync(id);
      success("Usuário deletado com sucesso");
    } catch (error) {
      // Erro já é tratado no hook
    } finally {
      setDeletingId(null);
    }
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <Box textAlign="center">
          <CircularProgress size={40} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Carregando usuários...
          </Typography>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <Alert severity="error" sx={{ maxWidth: 500 }}>
          Erro ao carregar usuários: {error.message}
        </Alert>
      </Box>
    );
  }

  const users = usersResponse?.data || [];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Lista de Usuários
      </Typography>

      {users.length === 0 ? (
        <Card>
          <CardContent>
            <Typography variant="h6" color="text.secondary" textAlign="center">
              Nenhum usuário encontrado
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <TableContainer component={Paper} elevation={2}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "grey.50" }}>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Username
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Ações
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>
                    <Typography variant="body1" fontWeight="medium">
                      {user.username}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDelete(user.id)}
                      disabled={deletingId === user.id}
                      color="error"
                      startIcon={
                        deletingId === user.id ? (
                          <CircularProgress size={16} />
                        ) : (
                          <DeleteIcon />
                        )
                      }
                      variant="outlined"
                      size="small"
                    >
                      {deletingId === user.id ? "Deletando..." : "Deletar"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
