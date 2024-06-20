import AppRouter from "./router";
import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./utils";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppRouter route={Routes.index} />,
    errorElement: <AppRouter route={Routes.index} />,
  },
  {
    path: Routes.index,
    element: <AppRouter route={Routes.index} />,
  },
  {
    path: "*",
    element: <AppRouter route={Routes.error} />,
  },
]);

export default browserRouter;
