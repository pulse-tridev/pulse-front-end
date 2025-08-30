"use client";
import React from "react";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Collapse,
  List,
  Badge,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem, MenuLink, MenuNested } from "./types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type Props = {
  item: MenuItem;
  open?: boolean;
  onToggle?: (open: boolean) => void;
};

function SidebarItemCollapsedComponent({ item, open, onToggle }: Props) {
  const pathname = usePathname();
  const isLink = (i: MenuItem): i is MenuLink =>
    (i as MenuLink).href !== undefined && !(i as any).children;
  const isNested = (i: MenuItem): i is MenuNested =>
    (i as MenuNested).children !== undefined;

  const isActive = isLink(item) && pathname === item.href;
  const hasActiveChild =
    isNested(item) && item.children.some((c) => pathname === c.href);

  const baseColor = (theme: any) =>
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.72)"
      : "rgba(0,0,0,0.64)";

  const ParentButton = (
    <ListItemButton
      onClick={() =>
        isNested(item)
          ? hasActiveChild
            ? onToggle && onToggle(true) // mantém aberto quando há subitem ativo
            : onToggle && onToggle(!open)
          : undefined
      }
      component={isLink(item) ? Link : "div"}
      href={isLink(item) ? item.href : undefined}
      selected={isActive}
      aria-haspopup={isNested(item) ? "true" : undefined}
      aria-expanded={isNested(item) ? !!open : undefined}
      aria-controls={isNested(item) ? `${item.label}-submenu` : undefined}
      role={isNested(item) ? "button" : undefined}
      aria-label={item.label}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        px: 0,
        py: 0,
        minHeight: 36,
        my: 0,
        width: 36,
        minWidth: 36,
        mx: "auto",
        borderRadius: 1.25,
        color: (theme) =>
          isActive ? theme.palette.primary.main : baseColor(theme),
        "&:hover": { backgroundColor: "transparent" },
        "&.Mui-selected:hover": { backgroundColor: "transparent" },
        // aplica bubble SOMENTE no ícone, evitando overlay duplo do button
        "&:hover .MuiListItemIcon-root": (theme) => ({
          backgroundColor:
            isActive || hasActiveChild
              ? alpha(theme.palette.primary.main, 0.16)
              : alpha(theme.palette.primary.main, 0.1),
          width: 36,
          height: 36,
          borderRadius: 1.25,
        }),
        "&.Mui-selected:hover .MuiListItemIcon-root": (theme) => ({
          backgroundColor: alpha(theme.palette.primary.main, 0.18),
          width: 36,
          height: 36,
          borderRadius: 1.25,
        }),
        "&.Mui-selected": (theme) => ({
          color: theme.palette.primary.main,
          backgroundColor: "transparent",
        }),
      }}
    >
      <ListItemIcon
        sx={(theme) => ({
          minWidth: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: 1.25,
          backgroundColor: isActive
            ? alpha(theme.palette.primary.main, 0.16)
            : "transparent",
          color: isActive ? theme.palette.primary.main : baseColor(theme),
          "& svg": { fontSize: 18, margin: 0 },
        })}
      >
        {item.icon &&
          (isNested(item) ? (
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                open ? (
                  <ExpandLessIcon sx={{ fontSize: 14 }} />
                ) : (
                  <ExpandMoreIcon sx={{ fontSize: 14 }} />
                )
              }
              sx={{
                "& .MuiBadge-badge": {
                  p: 0,
                  minWidth: 0,
                  height: 14,
                  width: 14,
                  borderRadius: "50%",
                  backgroundColor: (theme) =>
                    alpha(theme.palette.background.paper, 0.9),
                  color: "inherit",
                  boxShadow: (theme) =>
                    `0 0 0 1px ${alpha(theme.palette.divider, 0.8)}`,
                  pointerEvents: "none",
                  // leve deslocamento para baixo/esquerda para não cobrir o ícone base
                  bottom: 2,
                  left: 3,
                },
              }}
            >
              {React.isValidElement(item.icon)
                ? item.icon
                : (() => {
                    const IconComp = item.icon as React.ElementType;
                    return <IconComp />;
                  })()}
            </Badge>
          ) : React.isValidElement(item.icon) ? (
            item.icon
          ) : (
            (() => {
              const IconComp = item.icon as React.ElementType;
              return <IconComp />;
            })()
          ))}
      </ListItemIcon>
    </ListItemButton>
  );

  if (!isNested(item)) {
    return (
      <Tooltip title={item.label} placement="right">
        <span style={{ display: "block" }}>{ParentButton}</span>
      </Tooltip>
    );
  }

  return (
    <span style={{ display: "block", textAlign: "center" }}>
      <Box
        id={`${item.label}-submenu`}
        role="group"
        aria-label={`Submenu ${item.label}`}
        sx={(theme) => ({
          ml: 0,
          mr: 0,
          my: 0,
          p: 0,
          width: "auto",
          mx: "auto",
          borderRadius: 1.25,
          backgroundColor: open
            ? hasActiveChild
              ? alpha(theme.palette.primary.main, 0.16)
              : theme.palette.mode === "dark"
              ? alpha(theme.palette.grey[700], 0.5)
              : theme.palette.grey[100]
            : "transparent",
          display: "inline-block",
          lineHeight: 0,
          verticalAlign: "middle",
          overflow: "hidden",
          // zera gaps internos: pai e filhos sem margem e sem radius nas bordas internas
          "& .MuiListItemButton-root": {
            marginTop: 0,
            marginBottom: 0,
            borderRadius: 0,
          },
        })}
      >
        <Tooltip title={item.label} placement="right">
          <span style={{ display: "inline-block" }}>{ParentButton}</span>
        </Tooltip>
        <Collapse in={!!open} timeout={200} unmountOnExit>
          <List component="div" disablePadding sx={{ p: 0, m: 0 }}>
            {item.children.map((child) => {
              const activeChild = pathname === child.href;
              return (
                <ListItemButton
                  key={child.label}
                  component={Link}
                  href={child.href}
                  selected={activeChild}
                  aria-current={activeChild ? "page" : undefined}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    px: 0,
                    py: 0,
                    mb: 0,
                    minHeight: 36,
                    width: 36,
                    minWidth: 36,
                    mx: "auto",
                    borderRadius: 1,
                    "&:hover": { backgroundColor: "transparent" },
                    "&:hover .MuiListItemIcon-root": (theme) => ({
                      backgroundColor: activeChild
                        ? alpha(theme.palette.primary.main, 0.16)
                        : alpha(theme.palette.primary.main, 0.1),
                      width: 36,
                      height: 36,
                    }),
                    "&.Mui-selected": (theme) => ({
                      backgroundColor: "transparent",
                      color: theme.palette.primary.main,
                    }),
                  }}
                >
                  {child.icon && (
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 36,
                        height: 36,
                        borderRadius: 1.25,
                        color: (theme) =>
                          activeChild
                            ? theme.palette.primary.main
                            : baseColor(theme),
                        "& svg": { fontSize: 18, margin: 0 },
                      }}
                    >
                      <Tooltip title={child.label} placement="right">
                        <span style={{ display: "inline-flex", lineHeight: 0 }}>
                          {React.isValidElement(child.icon)
                            ? child.icon
                            : (() => {
                                const IconComp =
                                  child.icon as React.ElementType;
                                return <IconComp />;
                              })()}
                        </span>
                      </Tooltip>
                    </ListItemIcon>
                  )}
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </Box>
    </span>
  );
}

const SidebarItemCollapsed = React.memo(
  SidebarItemCollapsedComponent,
  (prev, next) => {
    // Ignora identidade da função onToggle; considera apenas item ref e open
    return prev.item === next.item && prev.open === next.open;
  }
);

export default SidebarItemCollapsed;
