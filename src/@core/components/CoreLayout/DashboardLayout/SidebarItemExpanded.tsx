"use client";
import React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem, MenuLink, MenuNested } from "./types";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

type Props = {
  item: MenuItem;
};

function SidebarItemExpandedComponent({ item }: Props) {
  const pathname = usePathname();
  const isLink = (i: MenuItem): i is MenuLink =>
    (i as MenuLink).href !== undefined && !(i as any).children;
  const isNested = (i: MenuItem): i is MenuNested =>
    (i as MenuNested).children !== undefined;
  const isActive = isLink(item) && pathname === item.href;
  const hasActiveChild =
    isNested(item) && item.children.some((c) => pathname === c.href);
  const [open, setOpen] = React.useState<boolean>(hasActiveChild);
  React.useEffect(() => {
    // mantém sempre aberto quando tiver subitem ativo
    if (hasActiveChild) setOpen(true);
  }, [hasActiveChild]);

  const baseColor = (theme: any) =>
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.72)"
      : "rgba(0,0,0,0.64)";

  return (
    <>
      <ListItemButton
        onClick={() =>
          isNested(item)
            ? hasActiveChild
              ? setOpen(true)
              : setOpen((p) => !p)
            : undefined
        }
        component={isLink(item) ? Link : "div"}
        href={isLink(item) ? item.href : undefined}
        selected={isActive}
        aria-haspopup={isNested(item) ? "true" : undefined}
        aria-expanded={isNested(item) ? open : undefined}
        aria-controls={isNested(item) ? `${item.label}-submenu` : undefined}
        role={isNested(item) ? "button" : undefined}
        aria-label={item.label}
        sx={{
          justifyContent: "flex-start",
          px: 2,
          py: 0.75,
          minHeight: 40,
          mb: 0.5,
          borderRadius: 1.25,
          color: (theme) =>
            isActive ? theme.palette.primary.main : baseColor(theme),
          transition: "background-color 0.2s ease, color 0.2s ease",
          "&:hover": (theme) => ({
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
          }),
          "&.Mui-selected": (theme) => ({
            backgroundColor: alpha(theme.palette.primary.main, 0.12),
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.main, 0.16),
            },
          }),
        }}
      >
        <ListItemIcon
          sx={(theme) => ({
            minWidth: 0,
            mr: 1.5,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            color: isActive ? theme.palette.primary.main : baseColor(theme),
            "& svg": { fontSize: 18 },
          })}
        >
          {item.icon &&
            (React.isValidElement(item.icon)
              ? item.icon
              : (() => {
                  const IconComp = item.icon as React.ElementType;
                  return <IconComp />;
                })())}
        </ListItemIcon>
        <ListItemText
          primary={item.label}
          slotProps={{
            primary: {
              sx: (theme) => ({
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 0.2,
                color: isActive ? theme.palette.primary.main : baseColor(theme),
                whiteSpace: "nowrap",
              }),
            },
          }}
        />
        {isNested(item) && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {isNested(item) && (
        <Collapse in={open} timeout={200} unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child) => {
              const activeChild = pathname === child.href;
              return (
                <ListItemButton
                  key={child.label}
                  component={Link}
                  href={child.href}
                  selected={activeChild}
                  sx={{
                    pl: 4,
                    py: 0.5,
                    mb: 0.25,
                    minHeight: 34,
                    borderRadius: 1,
                    color: (theme) => baseColor(theme),
                    "&.Mui-selected": (theme) => ({
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                    }),
                  }}
                >
                  {child.icon && (
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1.5,
                        justifyContent: "center",
                        color: (theme) =>
                          activeChild
                            ? theme.palette.primary.main
                            : baseColor(theme),
                        "& svg": { fontSize: 16 },
                      }}
                    >
                      {React.isValidElement(child.icon)
                        ? child.icon
                        : (() => {
                            const IconComp = child.icon as React.ElementType;
                            return <IconComp />;
                          })()}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={child.label}
                    slotProps={{
                      primary: {
                        sx: (theme) => ({
                          fontSize: 12.5,
                          fontWeight: 500,
                          letterSpacing: 0.2,
                          color: activeChild
                            ? theme.palette.primary.main
                            : baseColor(theme),
                          whiteSpace: "nowrap",
                        }),
                      },
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
}

const SidebarItemExpanded = React.memo(SidebarItemExpandedComponent);
export default SidebarItemExpanded;
