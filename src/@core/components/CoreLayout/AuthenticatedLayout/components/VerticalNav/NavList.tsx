import React from "react";
import { List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup";
import { RouteConfigData } from "@core/routes/types";

type Props = {
  routes: RouteConfigData[];
  level?: number;
  isActive: (url?: string) => boolean;
  onNavigate: (url: string) => void;
};

export default function NavList({
  routes,
  level = 0,
  isActive,
  onNavigate,
}: Props) {
  return (
    <List disablePadding>
      {routes.map((route) =>
        route.type === "group" ? (
          <NavGroup
            key={route.id}
            group={route}
            level={level}
            isActive={isActive}
            onNavigate={onNavigate}
          />
        ) : (
          <NavItem
            key={route.id}
            item={route}
            level={level}
            isActive={isActive(route.url)}
            onNavigate={onNavigate}
          />
        )
      )}
    </List>
  );
}
