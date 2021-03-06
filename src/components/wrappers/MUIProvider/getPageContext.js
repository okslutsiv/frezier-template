/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from "jss";
import {
  createMuiTheme,
  createGenerateClassName,
} from "@material-ui/core/styles";

import { gold, burgundy, error, olive } from "./ThemeColorsTriad";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 20,
        minWidth: 110,
      },
      containedPrimary: {
        "&:hover": {
          backgroundColor: burgundy[900],
        },
      },
    },
    MuiStepLabel: {
      label: {
        fontSize: 14,
        color: gold[500],
      },
    },
    MuiStepIcon: {
      root: {
        color: gold[300],
      },
    },
    MuiRadio: {
      root: {
        color: gold[900],
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: gold[200],
        color: burgundy[900],
      },
    },
    MuiFormLabel: {
      root: {
        color: gold[500],
        fontSize: 14,
      },
    },
    MuiListItem: {
      root: {
        "&$disabled": {
          backgroundColor: gold[900],
          color: "#fff",
          paddingLeft: 10,
          "&:focus": {
            backgroundColor: gold[900],
            color: "#fff",
          },
        },
        "&$selected": {
          color: burgundy[900],
        },
      },
    },
  },
  palette: {
    background: {
      default: "rgba(255,250,240,1)",
    },
    primary: { main: burgundy[900] },
    secondary: { main: olive[700] },
    gold: {
      rgb: gold["rgb"],
      "100": gold[100],
      "200": gold[200],
      "300": gold[300],
      "400": gold[400],
      "500": gold[500],
      "600": gold[600],
      "700": gold[700],
      "800": gold[800],
      "900": gold[900],
    },
    olive: {
      rgb: olive["rgb"],
      "100": olive[100],
      "200": olive[200],
      "300": olive[300],
      "400": olive[400],
      "500": olive[500],
      "600": olive[600],
      "700": olive[700],
      "800": olive[800],
      "900": olive[900],
    },
    burgundy: {
      rgbdark: burgundy["rgbdark"],
      rgb: burgundy["rgb"],
      "100": burgundy[100],
      "200": burgundy[200],
      "300": burgundy[300],
      "400": burgundy[400],
      "500": burgundy[500],
      "600": burgundy[600],
      "700": burgundy[700],
      "800": burgundy[800],
      "900": burgundy[900],
      A100: burgundy["A100"],
      A200: burgundy["A200"],
      A400: burgundy["A400"],
      A700: burgundy["A700"],
    },
    error: {
      rgb: error["rgb"],
      "100": error[100],
      "300": error[300],
      "500": error[500],
      "700": error[700],
      "900": error[900],
    },

    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },

  typography: {
    useNextVariants: true,
    fontFamily: `"Roboto Slab", "serif"`,
    h1: {
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: 300,
      fontSize: "3rem",
      lineHeight: 1.5,
      wordSpacing: "1rem",
      letterSpacing: "-0.00833em",
      textTransform: "uppercase",
      fontFamily: "'Montserrat Alternates', sans-serif",
    },
    h2: {
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: 300,
      fontSize: "2.2rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      textTransform: "uppercase",
      fontFamily: "'Montserrat Alternates', sans-serif",
      wordSpacing: "0.5rem",
    },
    h3: {
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: 300,
      fontSize: "1.8rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      fontFamily: "'Montserrat Alternates', sans-serif",
      wordSpacing: "0.3rem",
    },
    h5: {
      fontWeight: 300,
      fontSize: "1.5rem",
      lineHeight: 1.5,
      letterSpacing: "-0.00833em",
      fontFamily: "'Montserrat Alternates', sans-serif",
      wordSpacing: "0.25rem",
    },
    body1: {
      color: "rgba(0, 0, 0, 0.87)",
      fontFamily: '"Roboto Slab", "serif";',
      fontWeight: 300,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      color: "rgba(0, 0, 0, 0.87)",
      fontFamily: '"Roboto Slab", "serif";',
      fontWeight: 400,
      fontSize: "0.9rem",
      lineHeight: 1.4,
      letterSpacing: "0.00938em",
    },
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
