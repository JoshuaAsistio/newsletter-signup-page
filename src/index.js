import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Success from "./components/Success";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="newsletter-signup-page" element={<App />} />
          <Route path="newsletter-signup-page/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
