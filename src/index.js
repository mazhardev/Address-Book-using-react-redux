import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layout/App.jsx";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from 'react-redux'
import { configureStore } from './app/store/configureStore'

const store=configureStore();

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
 </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
