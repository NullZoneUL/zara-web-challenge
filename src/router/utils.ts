import MainPage from "@components/main";
import FavoritesPage from "@components/favorites";
import CharacterDetailPage from "@components/detail";

export type RouteKeys = keyof typeof Routes;

export const enum Routes {
  index = "index",
  favorites = "favorites",
  character = "character",
  error = "error",
}

export const getComponentFromRoute = (route: RouteKeys) => components[route];

export const components = {
  [Routes.index]: MainPage,
  [Routes.favorites]: FavoritesPage,
  [Routes.character]: CharacterDetailPage,
  [Routes.error]: MainPage,
};
