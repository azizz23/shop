import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/global/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter } from "react-router-dom";
import { polyfill } from "seamless-scroll-polyfill";
import { store } from "./store";
import { Provider } from "react-redux";

polyfill();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
