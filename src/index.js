import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext/theme-context.jsx";
import { AuthProvider } from "./context/authContext/auth-context";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { options } from "./utils/alertOptions";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
