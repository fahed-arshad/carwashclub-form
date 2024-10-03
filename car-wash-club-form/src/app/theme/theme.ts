import { createTheme } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";
import { nunito } from "../layout";

declare module "@mui/material/styles" {
  interface Palette {
    appBar: Palette["primary"];
  }

  interface PaletteOptions {
    appBar?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  spacing: 8,
  palette: {
    appBar: {
      main: "#FFFFFF",
    },
    primary: {
      main: "#05173d",
    },
    secondary: {
      main: "#00a2af",
    },
    text: {
      primary: "#303133",
    },
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          alignItems: "flex-start",
        },
        listbox: {
          alignItems: "flex-start",
        },
      },
    },
  },
});
