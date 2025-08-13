import type {} from "@mui/material/themeCssVarsAugmentation";
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Shape {
    borderRadiusTokens?: {
      none: number;
      small: number;
      medium: number;
      large: number;
      xlarge: number;
    };
  }
  interface ShapeOptions {
    borderRadiusTokens?: {
      none: number;
      small: number;
      medium: number;
      large: number;
      xlarge: number;
    };
  }
  interface Shape {
    borderRadiusTokens: {
      none: number;
      small: number;
      medium: number;
      large: number;
      xlarge: number;
    };
  }
  interface ShapeOptions {
    borderRadiusTokens?: {
      none: number;
      small: number;
      medium: number;
      large: number;
      xlarge: number;
    };
  }
  interface Palette {
    surface: {
      default: string;
      hover: string;
      pressed: string;
      selected: string;
      selectedHover: string;
    };
  }
  interface PaletteOptions {
    surface?: Palette["surface"];
  }
}
