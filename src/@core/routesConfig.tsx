// Menu de navegação
export const routesConfig = [
  {
    id: "home",
    title: "Home",
    type: "item" as const,
    icon: "home",
    url: "/home",
  },
  {
    id: "management",
    title: "Gerenciamento",
    type: "group" as const,
    icon: "settings",
    children: [
      {
        id: "users",
        title: "Usuários",
        type: "item" as const,
        icon: "people",
        url: "/users",
      },
      {
        id: "settings",
        title: "Configurações",
        type: "item" as const,
        icon: "settings",
        url: "/settings",
      },
    ],
  },
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item" as const,
    icon: "dashboard",
    url: "/dashboard",
  },
];
