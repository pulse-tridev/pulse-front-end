// Adobe React Spectrum Design System Colors
type SpectrumColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export const spectrumColors: {
  blue: SpectrumColorScale;
  gray: SpectrumColorScale;
  red: SpectrumColorScale;
  green: SpectrumColorScale;
  orange: SpectrumColorScale;
  yellow: SpectrumColorScale;
  purple: SpectrumColorScale;
  teal: SpectrumColorScale;
} = {
  blue: {
    50: "#E1F5FE",
    100: "#e0f2ff",
    200: "#cae8ff",
    300: "#b5deff",
    400: "#96cefd",
    500: "#78bbfa",
    600: "#59a7f6",
    700: "#3892f3",
    800: "#147af3",
    900: "#0265dc",
  },

  gray: {
    50: "#ffffff",
    100: "#f8f8f8",
    200: "#e6e6e6",
    300: "#d5d5d5",
    400: "#b1b1b1",
    500: "#909090",
    600: "#6d6d6d",
    700: "#464646",
    800: "#222222",
    900: "#000000",
  },

  red: {
    50: "#FFEBEE",
    100: "#ffebe7",
    200: "#ffddd6",
    300: "#ffcdc3",
    400: "#ffb7a9",
    500: "#ff9b88",
    600: "#ff7c65",
    700: "#f75c46",
    800: "#ea3829",
    900: "#d31510",
  },

  green: {
    50: "#E8F5E8",
    100: "#cef8e0",
    200: "#adf4ce",
    300: "#89ecbc",
    400: "#67dea8",
    500: "#49cc93",
    600: "#2fb880",
    700: "#15a46e",
    800: "#008f5d",
    900: "#007a4d",
  },

  orange: {
    50: "#FFF3E0",
    100: "#ffeccc",
    200: "#ffdfad",
    300: "#fdd291",
    400: "#ffbb63",
    500: "#ffa037",
    600: "#f68511",
    700: "#e46f00",
    800: "#cb5d00",
    900: "#b14c00",
  },
  yellow: {
    50: "#FFFDE7",
    100: "#fbf198",
    200: "#f8e750",
    300: "#f8d904",
    400: "#e8c600",
    500: "#d7b300",
    600: "#c49f00",
    700: "#b08c00",
    800: "#9b7800",
    900: "#856600",
  },
  purple: {
    50: "#F3E5F5",
    100: "#f6ebff",
    200: "#edf",
    300: "#e6d0ff",
    400: "#dbbbfe",
    500: "#cca4fd",
    600: "#bd8bfc",
    700: "#ae72f9",
    800: "#9d57f4",
    900: "#893de7",
  },

  teal: {
    50: "#E0F2F1",
    100: "#B2DFDB",
    200: "#80CBC4",
    300: "#4DB6AC",
    400: "#26A69A",
    500: "#009688",
    600: "#00897B",
    700: "#00796B",
    800: "#00695C",
    900: "#004D40",
  },
};

export const createPalette = () => ({
  mode: "light" as const,
  primary: {
    main: spectrumColors.blue[800],
    light: spectrumColors.blue[800],
    dark: spectrumColors.blue[800],
    contrastText: "#ffffff",
  },
  secondary: {
    main: spectrumColors.gray[800],
    light: spectrumColors.gray[800],
    dark: spectrumColors.gray[800],
    contrastText: "#ffffff",
  },
  error: {
    main: spectrumColors.red[500],
    light: spectrumColors.red[300],
    dark: spectrumColors.red[700],
    contrastText: "#ffffff",
  },
  warning: {
    main: spectrumColors.orange[500],
    light: spectrumColors.orange[300],
    dark: spectrumColors.orange[700],
    contrastText: "#ffffff",
  },
  info: {
    main: spectrumColors.blue[500],
    light: spectrumColors.blue[300],
    dark: spectrumColors.blue[700],
    contrastText: "#ffffff",
  },
  success: {
    main: spectrumColors.green[500],
    light: spectrumColors.green[300],
    dark: spectrumColors.green[700],
    contrastText: "#ffffff",
  },
  background: {
    default: "#FAFAFB",
    paper: "#FFFFFF",
  },
  surface: {
    default: "#ffffff",
    hover: spectrumColors.gray[100],
    pressed: spectrumColors.gray[200],
    selected: spectrumColors.blue[50],
    selectedHover: spectrumColors.blue[100],
  },
  text: {
    primary: spectrumColors.gray[900],
    secondary: spectrumColors.gray[800],
    disabled: spectrumColors.gray[400],
  },
  divider: spectrumColors.gray[200],
  action: {
    active: spectrumColors.gray[800],
    hover: spectrumColors.gray[100],
    hoverOpacity: 0.08,
    selected: spectrumColors.blue[50],
    selectedOpacity: 0.16,
    disabled: spectrumColors.gray[300],
    disabledBackground: spectrumColors.gray[100],
    disabledOpacity: 0.38,
    focus: spectrumColors.blue[500],
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
});
