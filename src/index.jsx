/*
  Needed
*/
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

/* 
  Import libraries
*/
import { DefaultTheme } from "./assets/themes/default";
import { GlobalStyles } from "./assets/global";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";

/* 
  library styles
*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/normalize.css";

/* 
  Components
*/
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <AuthProvider>
        <App />
      </AuthProvider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
