import MainPage from "@components/main";
import FavoritesContainer from "@components/favorites";

export type RouteKeys = keyof typeof Routes;

export const enum Routes {
  index = "index",
  favorites = "favorites",
  error = "error",
}

export const getComponentFromRoute = (route: RouteKeys) => components[route];

export const components = {
  [Routes.index]: MainPage,
  [Routes.favorites]: FavoritesContainer,
  [Routes.error]: MainPage,
};
