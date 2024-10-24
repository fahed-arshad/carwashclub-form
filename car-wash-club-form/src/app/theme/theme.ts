import { createTheme } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";
import { saira, syne } from "./font";

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
      main: "#212121",
    },
    secondary: {
      main: "#D1CDCD",
    },
    text: {
      primary: "#FFFFFF",
    },
    background: {
      paper: "#212121",
    },
  },
  typography: {
    fontFamily: saira.style.fontFamily,
    h5: {
      fontFamily: syne.style.fontFamily,
      textTransform: "uppercase",
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    h3: {
      fontFamily: syne.style.fontFamily,
      textTransform: "uppercase",
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    h2: {
      fontFamily: syne.style.fontFamily,
      textTransform: "uppercase",
      fontWeight: "bold",
      color: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: syne.style.fontFamily,
          fontWeight: "bold",
          textTransform: "uppercase",
          borderRadius: "100px",
          backgroundColor: "#14F7F0",
          color: "#1A1A1A",
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#14F7F0!important",
        },
        loading: {
          backgroundColor: "#14F7F0!important",
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0px 1000px #212121 inset", // Override autofill background color
            WebkitTextFillColor: "#FFFFFF", // Change text color to match your theme
          },
        },
        focused: {
          borderColor: "#FFFFFF!important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFFFFF", // Border color when focused
          },
        },
        notchedOutline: {
          borderColor: "#D1CDCD", // Default border color
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: "#14F7F0",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#FFFFFF!important",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: "#FFFFFF",
          "&.Mui-active": {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          fill: "#D1CDCD",
          "&.Mui-completed": {
            color: "#14F7F0!important",
            fill: "#14F7F0",
          },
          "&.Mui-active": {
            color: "#14F7F0",
            fill: "#14F7F0",
          },
          "&.Mui-active .MuiStepIcon-text": {
            fill: "#212121", // Active step icon text color
            fontWeight: "bold", // Make it bold when active
          },
        },
        text: {
          color: "#212121",
          fill: "#212121",
        },
      },
    },
  },
});
