"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  FormGroup,
  Chip,
  Alert,
  AlertTitle,
  LinearProgress,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Badge,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  AppBar,
  Toolbar,
  Drawer,
  ListItemButton,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  AttachMoney as MoneyIcon,
  ShoppingCart as CartIcon,
  People as PeopleIcon,
  ExpandMore as ExpandMoreIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  ShowChart as LineChartIcon,
  Refresh as RefreshIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";

// Mock data
const mockUsers = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@email.com",
    role: "Admin",
    status: "Ativo",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@email.com",
    role: "User",
    status: "Ativo",
  },
  {
    id: 3,
    name: "Pedro Costa",
    email: "pedro@email.com",
    role: "Editor",
    status: "Inativo",
  },
  {
    id: 4,
    name: "Ana Oliveira",
    email: "ana@email.com",
    role: "User",
    status: "Ativo",
  },
];

const mockStats = [
  {
    title: "Vendas",
    value: "R$ 45.230",
    change: "+12%",
    icon: <MoneyIcon />,
    color: "success",
  },
  {
    title: "Usuários",
    value: "2.345",
    change: "+8%",
    icon: <PeopleIcon />,
    color: "primary",
  },
  {
    title: "Pedidos",
    value: "1.234",
    change: "+15%",
    icon: <CartIcon />,
    color: "warning",
  },
  {
    title: "Taxa de Conversão",
    value: "3.24%",
    change: "+2%",
    icon: <TrendingUpIcon />,
    color: "info",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DashboardPage() {
  const [tabValue, setTabValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    notifications: true,
    theme: "light",
    preferences: ["email", "sms"],
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleFormChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSnackbarOpen(true);
    setDialogOpen(false);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pulse Dashboard - Adobe React Spectrum Style
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar sx={{ ml: 2 }}>JS</Avatar>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            top: 64,
            height: "calc(100% - 64px)",
          },
        }}
      >
        <List>
          <ListItemButton selected>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Usuários" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Bem-vindo ao seu painel de controle personalizado
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {mockStats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box sx={{ color: `${stat.color}.main`, mr: 2 }}>
                        {stat.icon}
                      </Box>
                      <Typography variant="h6" component="div">
                        {stat.title}
                      </Typography>
                    </Box>
                    <Typography variant="h4" component="div" gutterBottom>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="success.main">
                      {stat.change} desde o último mês
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Tabs Section */}
          <Card sx={{ mb: 4 }}>
            <CardHeader title="Gerenciamento de Dados" />
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="Usuários" {...a11yProps(0)} />
                <Tab label="Formulário" {...a11yProps(1)} />
                <Tab label="Gráficos" {...a11yProps(2)} />
                <Tab label="Configurações" {...a11yProps(3)} />
              </Tabs>
            </Box>

            {/* Tab 1: Users Table */}
            <TabPanel value={tabValue} index={0}>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => setDialogOpen(true)}
                  sx={{ mr: 2 }}
                >
                  Adicionar Usuário
                </Button>
                <Button variant="outlined" startIcon={<DownloadIcon />}>
                  Exportar
                </Button>
              </Box>

              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nome</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Função</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Ações</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Chip label={user.role} size="small" />
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={user.status}
                            color={
                              user.status === "Ativo" ? "success" : "default"
                            }
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="right">
                          <IconButton size="small">
                            <VisibilityIcon />
                          </IconButton>
                          <IconButton size="small">
                            <EditIcon />
                          </IconButton>
                          <IconButton size="small" color="error">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>

            {/* Tab 2: Form */}
            <TabPanel value={tabValue} index={1}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardHeader title="Formulário de Usuário" />
                    <CardContent>
                      <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 2 }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Nome"
                              value={formData.name}
                              onChange={(e) =>
                                handleFormChange("name", e.target.value)
                              }
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                handleFormChange("email", e.target.value)
                              }
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <InputLabel>Função</InputLabel>
                              <Select
                                value={formData.role}
                                label="Função"
                                onChange={(e) =>
                                  handleFormChange("role", e.target.value)
                                }
                              >
                                <MenuItem value="admin">Administrador</MenuItem>
                                <MenuItem value="user">Usuário</MenuItem>
                                <MenuItem value="editor">Editor</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl component="fieldset">
                              <FormLabel component="legend">
                                Preferências
                              </FormLabel>
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={formData.preferences.includes(
                                        "email"
                                      )}
                                      onChange={(e) => {
                                        const newPrefs = e.target.checked
                                          ? [...formData.preferences, "email"]
                                          : formData.preferences.filter(
                                              (p) => p !== "email"
                                            );
                                        handleFormChange(
                                          "preferences",
                                          newPrefs
                                        );
                                      }}
                                    />
                                  }
                                  label="Receber emails"
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={formData.preferences.includes(
                                        "sms"
                                      )}
                                      onChange={(e) => {
                                        const newPrefs = e.target.checked
                                          ? [...formData.preferences, "sms"]
                                          : formData.preferences.filter(
                                              (p) => p !== "sms"
                                            );
                                        handleFormChange(
                                          "preferences",
                                          newPrefs
                                        );
                                      }}
                                    />
                                  }
                                  label="Receber SMS"
                                />
                              </FormGroup>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl component="fieldset">
                              <FormLabel component="legend">Tema</FormLabel>
                              <RadioGroup
                                value={formData.theme}
                                onChange={(e) =>
                                  handleFormChange("theme", e.target.value)
                                }
                              >
                                <FormControlLabel
                                  value="light"
                                  control={<Radio />}
                                  label="Claro"
                                />
                                <FormControlLabel
                                  value="dark"
                                  control={<Radio />}
                                  label="Escuro"
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={formData.notifications}
                                  onChange={(e) =>
                                    handleFormChange(
                                      "notifications",
                                      e.target.checked
                                    )
                                  }
                                />
                              }
                              label="Ativar notificações"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Box sx={{ display: "flex", gap: 2 }}>
                              <Button type="submit" variant="contained">
                                Salvar
                              </Button>
                              <Button variant="outlined">Cancelar</Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card>
                    <CardHeader title="Progresso" />
                    <CardContent>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="body2" gutterBottom>
                          Completude do perfil
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={75}
                          sx={{ mb: 1 }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          75% completo
                        </Typography>
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Typography variant="body2" gutterBottom>
                          Carregamento
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <CircularProgress size={40} />
                          <Typography variant="body2">
                            Processando dados...
                          </Typography>
                        </Box>
                      </Box>

                      <Divider sx={{ my: 2 }} />

                      <Typography variant="h6" gutterBottom>
                        Alertas
                      </Typography>
                      <Alert severity="info" sx={{ mb: 2 }}>
                        <AlertTitle>Informação</AlertTitle>
                        Este é um alerta informativo.
                      </Alert>
                      <Alert severity="success" sx={{ mb: 2 }}>
                        <AlertTitle>Sucesso</AlertTitle>
                        Operação realizada com sucesso!
                      </Alert>
                      <Alert severity="warning" sx={{ mb: 2 }}>
                        <AlertTitle>Atenção</AlertTitle>
                        Este é um alerta de atenção.
                      </Alert>
                      <Alert severity="error">
                        <AlertTitle>Erro</AlertTitle>
                        Ocorreu um erro na operação.
                      </Alert>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>

            {/* Tab 3: Charts */}
            <TabPanel value={tabValue} index={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardHeader
                      title="Vendas Mensais"
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                    />
                    <CardContent>
                      <Box
                        sx={{
                          height: 300,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "grey.50",
                          borderRadius: 1,
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <BarChartIcon
                            sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
                          />
                          <Typography variant="h6" color="text.secondary">
                            Gráfico de Barras
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Dados de vendas mensais
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card>
                    <CardHeader
                      title="Distribuição de Usuários"
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                    />
                    <CardContent>
                      <Box
                        sx={{
                          height: 300,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "grey.50",
                          borderRadius: 1,
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <PieChartIcon
                            sx={{
                              fontSize: 60,
                              color: "secondary.main",
                              mb: 2,
                            }}
                          />
                          <Typography variant="h6" color="text.secondary">
                            Gráfico de Pizza
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Distribuição por categoria
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12}>
                  <Card>
                    <CardHeader
                      title="Tendências"
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                    />
                    <CardContent>
                      <Box
                        sx={{
                          height: 300,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "grey.50",
                          borderRadius: 1,
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <LineChartIcon
                            sx={{ fontSize: 60, color: "success.main", mb: 2 }}
                          />
                          <Typography variant="h6" color="text.secondary">
                            Gráfico de Linha
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Tendências ao longo do tempo
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>

            {/* Tab 4: Settings */}
            <TabPanel value={tabValue} index={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardHeader title="Configurações Gerais" />
                    <CardContent>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography>Notificações</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Configure suas preferências de notificação aqui.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography>Privacidade</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Gerencie suas configurações de privacidade.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography>Segurança</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Configure suas opções de segurança.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card>
                    <CardHeader title="Ações Rápidas" />
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        <Button
                          variant="contained"
                          startIcon={<UploadIcon />}
                          fullWidth
                        >
                          Fazer Backup
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<RefreshIcon />}
                          fullWidth
                        >
                          Sincronizar Dados
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<FilterIcon />}
                          fullWidth
                        >
                          Filtrar Resultados
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<SortIcon />}
                          fullWidth
                        >
                          Ordenar Dados
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
          </Card>
        </Container>
      </Box>

      {/* Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Adicionar Novo Usuário</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nome"
                  value={formData.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleFormChange("email", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Função</InputLabel>
                  <Select
                    value={formData.role}
                    label="Função"
                    onChange={(e) => handleFormChange("role", e.target.value)}
                  >
                    <MenuItem value="admin">Administrador</MenuItem>
                    <MenuItem value="user">Usuário</MenuItem>
                    <MenuItem value="editor">Editor</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancelar</Button>
          <Button onClick={handleSubmit} variant="contained">
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Usuário adicionado com sucesso!"
      />
    </Box>
  );
}
