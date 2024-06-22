const FAVORITES_LIST_KEY = "favorites_key";

export const createFavoritesIDsArray = (favorites: Character[]) =>
  favorites.map((item) => item.id);

export const saveFavorites = (favorites: Character[]) => {
  localStorage.setItem(FAVORITES_LIST_KEY, JSON.stringify(favorites));
};

export const getSavedFavorites = () =>
  JSON.parse(localStorage.getItem(FAVORITES_LIST_KEY) || "[]");
