import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/js/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import store from './store';
import store from "./redux/Store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    
     <React.StrictMode >
        <App />
      </React.StrictMode>
    
  </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
