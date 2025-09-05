import {
  Event,
  People,
  AttachMoney,
  BarChart,
  Settings,
  Add,
  TableRows,
  Person,
  Group,
  Dashboard,
} from "@mui/icons-material";
import { MenuConfig } from "@core/routes/types";

export const menuConfig: MenuConfig = [
  {
    section: "Principal",
    items: [
      { label: "Dashboard", icon: Dashboard, href: "/dashboard" },
      { label: "Agenda", icon: Event, href: "/agenda" },
      {
        label: "Pacientes",
        icon: People,
        children: [
          { label: "Lista", icon: TableRows, href: "/pacientes" },
          { label: "Novo", icon: Add, href: "/pacientes/novo" },
        ],
      },
    ],
  },
  {
    section: "Gestão",
    items: [
      {
        label: "Usuários",
        icon: Group,
        children: [
          { label: "Lista", icon: TableRows, href: "/users/list" },
          { label: "Novo", icon: Add, href: "/users/create" },
        ],
      },
      { label: "Financeiro", icon: AttachMoney, href: "/financeiro" },
      { label: "Relatórios", icon: BarChart, href: "/relatorios" },
    ],
  },
  {
    section: "Sistema",
    items: [
      { label: "Perfil", icon: Person, href: "/perfil" },
      { label: "Configurações", icon: Settings, href: "/configuracoes" },
    ],
  },
];
