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
  Stack,
  Tooltip,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Edit } from "@mui/icons-material";

const UsersPage = () => {
  const users = [
    {
      id: 1,
      name: "João Silva",
      email: "joao@example.com",
      role: "Admin",
      status: "Ativo",
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria@example.com",
      role: "Editor",
      status: "Ativo",
    },
    {
      id: 3,
      name: "Pedro Costa",
      email: "pedro@example.com",
      role: "Viewer",
      status: "Inativo",
    },
  ];

  return (
    <Box p={4}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h2" gutterBottom>
            Usuários
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gerencie os usuários do sistema
          </Typography>
        </Box>
        {/* <Button variant="contained" startIcon={<AddIcon />}>
          Novo Usuário
        </Button> */}
        <Button variant="outlined" startIcon={<AddIcon />}>
          Novo usuário
        </Button>
      </Box>

      {/* User Table */}
      <Card>
        <CardContent sx={{ p: 0 }}>
          <TableContainer component={Paper} elevation={0}>
            <Table>
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
                  <TableRow key={user.id}>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={2}>
                        <Avatar sx={{ bgcolor: "primary.main" }}>
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
                      <Tooltip title="Editar">
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar">
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar">
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      {/* <Tooltip title="Excluir">
                          <IconButton size="small" color="inherit">
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip> */}

                      {/* <Button variant="outlined" size="small">
                        Editar
                      </Button> */}
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
