import React from "react";
import ReactDOM from "react-dom/client";
import browserRouter from "@router/browserRouter";
import { RouterProvider } from "react-router-dom";
import "@assets/style/_imports.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
);
