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
  1000?: string;
  1100?: string;
  1200?: string;
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
    100: "#E0F2FF",
    200: "#CAE8FF",
    300: "#B5DEFF",
    400: "#96CEFD",
    500: "#78BBFA",
    600: "#59A7F6",
    700: "#3892F3",
    800: "#147AF3",
    900: "#0265DC",
    1000: "#0051B8",
    1100: "#003C94",
    1200: "#002870",
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
    1000: "#b10f0c",
    1100: "#900d0a",
    1200: "#700a08",
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
    1000: "#006639",
    1100: "#00512b",
    1200: "#003d20",
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
    1000: "#963d00",
    1100: "#7a3200",
    1200: "#5f2600",
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
    1000: "#735500",
    1100: "#5b4300",
    1200: "#423200",
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
    1000: "#782cd7",
    1100: "#6023b0",
    1200: "#481a87",
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
    1000: "#003a33",
    1100: "#002e27",
    1200: "#00221c",
  },
};

export const createPalette = (mode: "light" | "dark" = "light") => ({
  mode,
  primary: {
    main: spectrumColors.blue[900],
    light: spectrumColors.blue[900],
    dark: spectrumColors.blue[1000],
    contrastText: "#ffffff",
  },
  secondary: {
    main: spectrumColors.red[900],
    light: spectrumColors.gray[900],
    dark: spectrumColors.gray[1000],
    contrastText: "#ffffff",
  },
  error: {
    main: spectrumColors.red[900],
    light: spectrumColors.red[900],
    dark: spectrumColors.red[1000],
    contrastText: "#ffffff",
  },
  warning: {
    main: spectrumColors.orange[900],
    light: spectrumColors.orange[900],
    dark: spectrumColors.orange[1000],
    contrastText: "#ffffff",
  },
  info: {
    main: spectrumColors.blue[900],
    light: spectrumColors.blue[900],
    dark: spectrumColors.blue[1000],
    contrastText: "#ffffff",
  },
  success: {
    main: spectrumColors.green[900],
    light: spectrumColors.green[900],
    dark: spectrumColors.green[1000],
    contrastText: "#ffffff",
  },
  background: {
    default: "#fafafa", // cinza-claro aconchegante
    paper: "#ffffff",
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
    disabled: spectrumColors.gray[700],
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
