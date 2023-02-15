import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// CSS
import "./index.css";

// Provider and reduxstore
import reduxstore from "./Store/store";
import { Provider } from "react-redux";



ReactDOM.render(
    <Provider store={reduxstore}>
      <App />
    </Provider>,
  document.getElementById("root")
);
