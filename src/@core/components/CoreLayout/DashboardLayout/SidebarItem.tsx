"use client";
import React from "react";
import { MenuItem } from "./types";
import SidebarItemCollapsed from "./SidebarItemCollapsed";
import SidebarItemExpanded from "./SidebarItemExpanded";

type Props = {
  item: MenuItem;
  collapsed: boolean;
  open?: boolean;
  onToggle?: (open: boolean) => void;
};

function SidebarItem({ item, collapsed, open, onToggle }: Props) {
  if (collapsed) {
    return <SidebarItemCollapsed item={item} open={open} onToggle={onToggle} />;
  }
  return <SidebarItemExpanded item={item} />;
}

export default React.memo(SidebarItem, (prev, next) => {
  return (
    prev.item === next.item &&
    prev.collapsed === next.collapsed &&
    prev.open === next.open
  );
});
