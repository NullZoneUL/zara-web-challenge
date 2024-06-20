import MainPage from "@components/main";

export type RouteKeys = keyof typeof Routes;

export const enum Routes {
  index = "index",
  error = "error",
}

export const getComponentFromRoute = (route: RouteKeys) => components[route];

export const components = {
  [Routes.index]: MainPage,
  [Routes.error]: MainPage,
};
