import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

// Menu de navegação
export const routesConfig = [
  {
    id: "home",
    title: "Home",
    type: "item" as const,
    icon: HomeIcon,
    url: "/admin/home",
  },
  {
    id: "management",
    title: "Gerenciamento",
    type: "group" as const,
    icon: SettingsIcon,
    children: [
      {
        id: "users",
        title: "Usuários",
        type: "item" as const,
        icon: PeopleIcon,
        url: "/admin/users",
      },
      {
        id: "settings",
        title: "Configurações",
        type: "item" as const,
        icon: SettingsIcon,
        url: "/settings",
      },
    ],
  },
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item" as const,
    icon: DashboardIcon,
    url: "/dashboard",
  },
];
