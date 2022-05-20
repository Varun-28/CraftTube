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
import { VideoProvider } from "./context/videoContext/video-context";
import { UserDataProvider } from "./context/userDataContext/userData-context";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <VideoProvider>
            <UserDataProvider>
              <AlertProvider template={AlertTemplate} {...options}>
                <App />
              </AlertProvider>
            </UserDataProvider>
          </VideoProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
