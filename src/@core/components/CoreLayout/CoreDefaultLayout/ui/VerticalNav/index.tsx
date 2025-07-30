import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box, Collapse, Typography, alpha } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useRouter, usePathname } from "next/navigation";

type RouteConfigData = {
  id: string;
  title: string;
  type: "item" | "group";
  icon?: React.ReactNode;
  url?: string;
  children?: RouteConfigData[];
};

type Props = {
  routesConfig: RouteConfigData[];
};

const VerticalNav: React.FC<Props> = ({ routesConfig }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const handleNavigation = (url: string) => {
    router.push(url);
  };

  const handleGroupToggle = (groupId: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const isActive = (url?: string) => {
    if (!url) return false;
    return pathname === url;
  };

  const renderNavItem = (item: RouteConfigData, level: number = 0) => {
    const isItemActive = isActive(item.url);
    const isGroupOpen = openGroups[item.id];

    if (item.type === "group") {
      return (
        <React.Fragment key={item.id}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleGroupToggle(item.id)}
              sx={{
                py: 1.5,
                px: 3,
                mx: 1.5,
                my: 0.5,
                borderRadius: 2,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: alpha("#0A8FDC", 0.08),
                  transform: "translateX(4px)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "text.secondary",
                  minWidth: 40,
                  transition: "color 0.2s ease-in-out",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "text.primary",
                  },
                }}
              />
              {isGroupOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isGroupOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children?.map((child) => renderNavItem(child, level + 1))}
            </List>
          </Collapse>
        </React.Fragment>
      );
    }

    return (
      <ListItem key={item.id} disablePadding>
        <Box sx={{ width: "100%", position: "relative" }}>
          {/* Badge ativo */}
          {isItemActive && (
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
            onClick={() => handleNavigation(item.url!)}
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
              backgroundColor: isItemActive
                ? alpha("#0A8FDC", 0.12)
                : "transparent",
              "&:hover": {
                backgroundColor: isItemActive
                  ? alpha("#0A8FDC", 0.16)
                  : alpha("#0A8FDC", 0.08),
                transform: "translateX(4px)",
                "& .nav-icon": {
                  color: "primary.main",
                },
              },
              "&::before": isItemActive
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
                color: isItemActive ? "primary.main" : "text.secondary",
                minWidth: 40,
                transition: "all 0.2s ease-in-out",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "14px",
                  fontWeight: isItemActive ? 600 : 400,
                  color: isItemActive ? "primary.main" : "text.primary",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            />

            {/* Indicador ativo adicional */}
            {isItemActive && (
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
  };

  return (
    <List
      sx={{
        position: "relative",
        padding: 0,
        height: "calc(100vh - 100px) !important",
        flexDirection: "column",
        justifyContent: "space-between",
        display: "flex",
        backgroundColor: "background.paper",
      }}
      component="div"
    >
      <Box sx={{ py: 1 }}>
        {/* Header da navegação */}
        <Box sx={{ px: 3, py: 2, mb: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "text.secondary",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Navegação
          </Typography>
        </Box>

        {routesConfig.map((item) => renderNavItem(item))}
      </Box>
    </List>
  );
};

export default VerticalNav;
