import { pxToRem } from "@core/utils";

export const borderRadius = {
  none: 0,
  small: pxToRem(2), // tokens: radius-100 (2px)
  medium: pxToRem(4), // tokens: radius-200 (4px)
  large: pxToRem(6), // tokens: radius-300 (6px)
  xlarge: pxToRem(8), // tokens: radius-400 (8px)
};
