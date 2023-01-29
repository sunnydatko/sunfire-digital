import { createTheme, ThemeProvider } from "@mui/material/styles";

const color1 = "#00a3d9";
const color1a = "#48d1ff";
const color1b = "#e7f4ff";
const color2 = "#1b1b1b";
const color3 = "#565667";
const color3a = "#ccc";
const color4 = "#f8f8f8";
const color5 = "#e9651d";

const theme = createTheme({
  palette: {
    primary: {
      main: color1,
      light: color2,
    },
    secondary: {
      main: color5,
    },
    grey: {
      100: "rgb(248, 248, 248)",
      700: color3a,
      800: color3,
      900: "#1b1b1b",
    },
  },

  typography: {
    h1: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 900,
      lineHeight: "103%",
    },
    h2: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "'Barlow Condensed', sans-serif",
      textAlign: "center",
    },
    h4: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "36px",
    },
    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "20px",
      lineHeight: "33px",
    },
    body2: {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "white",
          fontFamily: "'Montserrat', sans-serif",
          "&:hover": {
            color: "white",
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: "#fff",
          fontSize: "40px",
          "&:hover": {
            color: "#48d1ff",
          },
        },
      },
    },
  },
});

export default theme;
