import {
  createFavoritesIDsArray,
  saveFavorites,
  getSavedFavorites,
} from "@utils/favorites";
import { createEmptyCharactersArray } from "@utils/empty-characters-array";

describe("Favorites external functions test", () => {
  const numFavorites = 10;
  const favoritesList = createEmptyCharactersArray(numFavorites);
  favoritesList.forEach((item, index) => (item.id = index));

  const mockGetItem = jest.fn();
  const mockSetItem = jest.fn();
  beforeEach(() => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation(mockGetItem);
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(mockSetItem);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Create favorites IDs array", () => {
    const ids = createFavoritesIDsArray(favoritesList);
    expect(ids.length).toBe(numFavorites);
    ids.forEach((item, index) => expect(item).toBe(index));
  });

  test("Save favorites list in local storage", () => {
    saveFavorites(favoritesList);
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith(
      "favorites_key",
      JSON.stringify(favoritesList),
    );
  });

  test("Get favorites list from local storage", () => {
    getSavedFavorites();
    expect(mockGetItem).toHaveBeenCalledTimes(1);
  });
});
