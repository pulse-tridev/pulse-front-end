import React from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  alpha,
} from "@mui/material";
import { RouteItem } from "@core/types/RouteConfig";

type Props = {
  item: RouteItem;
  level: number;
  isActive: boolean;
  onNavigate: (url: string) => void;
};

export default function NavItem({ item, level, isActive, onNavigate }: Props) {
  return (
    <ListItem disablePadding key={item.id}>
      <Box sx={{ width: "100%", position: "relative" }}>
        {isActive && (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: 4,
              height: "60%",
              backgroundColor: "primary.main",
              borderRadius: "0 8px 8px 0",
              zIndex: 1,
            }}
          />
        )}

        <ListItemButton
          onClick={() => onNavigate(item.url!)}
          sx={{
            py: 1.5,
            px: 3,
            mx: 1.5,
            my: 0.5,
            ml: level > 0 ? 4 : 1.5,
            borderRadius: 2,
            position: "relative",
            overflow: "hidden",
            transition: "all 0.2s ease-in-out",
            backgroundColor: isActive ? alpha("#0A8FDC", 0.12) : "transparent",
            "&:hover": {
              backgroundColor: isActive
                ? alpha("#0A8FDC", 0.16)
                : alpha("#0A8FDC", 0.08),
              transform: "translateX(4px)",
              "& .nav-icon": { color: "primary.main" },
            },
            "&::before": isActive
              ? {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(90deg, ${alpha(
                    "#0A8FDC",
                    0.1
                  )}, ${alpha("#0A8FDC", 0.05)})`,
                  pointerEvents: "none",
                }
              : {},
          }}
        >
          <ListItemIcon
            className="nav-icon"
            sx={{
              color: isActive ? "primary.main" : "text.secondary",
              minWidth: 40,
              transition: "all 0.2s ease-in-out",
            }}
          >
            {item.icon && <item.icon />}
          </ListItemIcon>

          <ListItemText
            primary={item.title}
            sx={{
              "& .MuiListItemText-primary": {
                fontSize: "14px",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "primary.main" : "text.primary",
                transition: "all 0.2s ease-in-out",
              },
            }}
          />

          {isActive && (
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                boxShadow: `0 0 8px ${alpha("#0A8FDC", 0.4)}`,
              }}
            />
          )}
        </ListItemButton>
      </Box>
    </ListItem>
  );
}
