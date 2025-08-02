import type { SvgIconComponent } from "@mui/icons-material";

/**
 * Define o formato de um item de rota simples (sem filhos)
 */
export interface RouteItem {
  /** Identificador único da rota */
  id: string;
  /** Título exibido no menu */
  title: string;
  /** Tipo de rota: item simples */
  type: "item";
  /** Componente de ícone do MUI para exibição no menu */
  icon: SvgIconComponent;
  /** Caminho da URL para navegação */
  url: string;
}

/**
 * Define o formato de um grupo de rotas, que contém itens filhos
 */
export interface RouteGroup {
  /** Identificador único do grupo */
  id: string;
  /** Título do grupo exibido no menu */
  title: string;
  /** Tipo de rota: grupo expansível */
  type: "group";
  /** Componente de ícone do MUI para exibição no menu */
  icon: SvgIconComponent;
  /** Itens filhos pertencentes a este grupo */
  children: Array<RouteItem>;
}

/**
 * Tipo unificado que representa tanto um item simples quanto um grupo de rotas
 */
export type RouteConfigData = RouteItem | RouteGroup;
