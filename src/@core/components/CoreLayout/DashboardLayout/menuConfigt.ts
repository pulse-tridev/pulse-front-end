import {
  Event,
  People,
  AttachMoney,
  BarChart,
  Settings,
  Add,
  TableRows,
} from "@mui/icons-material";
import { MenuConfig } from "./types";

export const menuConfig: MenuConfig = [
  {
    section: "Principal",
    items: [
      { label: "Agenda", icon: Event, href: "/admin/users" },
      {
        label: "Pacientes",
        icon: People,
        children: [
          { label: "Lista", icon: TableRows, href: "/admin/home" },
          { label: "Novo", icon: Add, href: "/dashboard/pacientes/novo" },
        ],
      },
    ],
  },
  {
    section: "Gestão",
    items: [
      { label: "Financeiro", icon: AttachMoney, href: "/dashboard/financeiro" },
      { label: "Relatórios", icon: BarChart, href: "/dashboard/relatorios" },
    ],
  },
  { label: "Configurações", icon: Settings, href: "/dashboard/config" },
];
