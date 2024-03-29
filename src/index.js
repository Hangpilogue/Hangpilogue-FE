import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store/config/configStore";
import GlobalStyle from "./GlobalStyle";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
      <GlobalStyle />
    </CookiesProvider>
  </Provider>
);
