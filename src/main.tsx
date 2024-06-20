import ReactDOM from "react-dom/client";
import browserRouter from "@router/browserRouter";
import { RouterProvider } from "react-router-dom";
import "@assets/style/_imports.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={browserRouter} />,
);
