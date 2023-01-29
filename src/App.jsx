import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import Router from "./components/Router";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
