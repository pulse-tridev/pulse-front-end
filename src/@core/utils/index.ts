const htmlFontSize = 16;

export function pxToRem(px: number): string {
  return `${px / htmlFontSize}rem`;
}
