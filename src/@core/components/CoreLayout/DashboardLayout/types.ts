import { ReactNode, ElementType } from "react";

export type MenuLink = {
  label: string;
  icon?: ReactNode | ElementType;
  href: string;
  children?: never;
  section?: never;
};

export type MenuGroup = {
  section: string;
  items: Array<MenuLink | MenuNested>;
};

export type MenuNested = {
  label: string;
  icon?: ReactNode | ElementType;
  href?: string;
  children: (MenuLink & { icon?: ReactNode | ElementType })[];
};

export type MenuItem = MenuLink | MenuNested;
export type MenuConfig = Array<MenuItem | MenuGroup>;
