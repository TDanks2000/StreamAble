import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/normalize.css";
import { DefaultTheme } from "./assets/themes/default";
import { GlobalStyles } from "./assets/global";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={DefaultTheme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
