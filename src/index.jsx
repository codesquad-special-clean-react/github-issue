import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import GlobalStyle from "./style/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
