import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routes";
import { AuthProvider } from "./context/AuthContext";
import store from "./store";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
