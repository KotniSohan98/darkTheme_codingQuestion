import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import Routes from "./routes";
import { ThemeProvider } from "./routes/App/context/ThemeProvider";

ReactDOM.render(
  <ThemeProvider>
    <AppContainer>
      <Routes />
    </AppContainer>
  </ThemeProvider>,
  document.getElementById("root")
);

// REQUIREMENTS!

// Add dark-mode switching functionality to the existing dark-mode button
// Utilise the existing dark-mode scss file by adding a dark-mode class to the root html element
// When in Dark mode:
// The button icon should be faSun
// The button icon colour should be (#FFA500). You can use the color prop on the Icon component.
