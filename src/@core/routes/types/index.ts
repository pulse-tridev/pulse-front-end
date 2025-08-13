import type { SvgIconComponent } from "@mui/icons-material";

export interface RouteItem {
  id: string;
  title: string;
  type: "item";
  icon: SvgIconComponent;
  url: string;
}

export interface RouteGroup {
  id: string;
  title: string;
  type: "group";
  icon: SvgIconComponent;
  children: Array<RouteItem>;
}

/**
 * Tipo unificado que representa tanto um item simples quanto um grupo de rotas
 */
export type RouteConfigData = RouteItem | RouteGroup;
