import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const UsersPage = () => {
  const users = [
    {
      id: 1,
      name: "João Silva",
      email: "joao@example.com",
      role: "Admin",
      status: "Ativo",
      avatar: null,
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria@example.com",
      role: "Editor",
      status: "Ativo",
      avatar: null,
    },
    {
      id: 3,
      name: "Pedro Costa",
      email: "pedro@example.com",
      role: "Viewer",
      status: "Inativo",
      avatar: null,
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Usuários
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gerencie os usuários do sistema
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ height: "fit-content" }}
        >
          Novo Usuário
        </Button>
      </Box>

      <Card>
        <CardContent sx={{ p: 0 }}>
          <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "grey.50" }}>
                  <TableCell>Usuário</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Função</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar sx={{ mr: 2, bgcolor: "primary.main" }}>
                          {user.name.charAt(0)}
                        </Avatar>
                        <Typography variant="body2" fontWeight={500}>
                          {user.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {user.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.role}
                        size="small"
                        color={user.role === "Admin" ? "primary" : "default"}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.status}
                        size="small"
                        color={user.status === "Ativo" ? "success" : "default"}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Button size="small" variant="outlined">
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UsersPage;
