import FavoritesPage from "@components/favorites";
import Translations from "@assets/translations/en.json";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { FavoritesContext } from "@components/container";
import { createEmptyCharactersArray } from "@utils/empty-characters-array";

describe("Favorites page tests", () => {
  const numFavorites = 10;
  const favoritesList = createEmptyCharactersArray(numFavorites);
  const modifyCharacterFavState = jest.fn();

  test("Basic render", () => {
    const { container } = render(
      <BrowserRouter>
        <FavoritesContext.Provider
          value={{ favorites: favoritesList, modifyCharacterFavState }}
        >
          <FavoritesPage />
        </FavoritesContext.Provider>
      </BrowserRouter>,
    );

    expect(
      screen.getByText(`${numFavorites} ${Translations.results}`),
    ).toBeTruthy();
    expect(
      container.getElementsByClassName("character-item-container").length,
    ).toBe(numFavorites);
  });
});
