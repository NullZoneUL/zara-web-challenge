import MainPage from "@components/main";
import Translations from "@assets/translations/en.json";
import { render, waitFor, screen } from "@testing-library/react";
import { FavoritesContext, CharactersContext } from "@components/container";
import { EmptyCharacterItem } from "@elements/character/character";

describe("Main page render tests", () => {
  const id = 23;
  const name = "Testing";
  const favorites: Character[] = [];
  const modifyCharacterFavState = jest.fn();
  const setCharacters = jest.fn();
  const character = { ...EmptyCharacterItem, id, name };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Basic render", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: { results: [character] } }),
    } as any);
  
    render(
      <FavoritesContext.Provider value={{ favorites, modifyCharacterFavState }}>
        <CharactersContext.Provider value={{ characters: [], setCharacters }}>
          <MainPage />
        </CharactersContext.Provider>
      </FavoritesContext.Provider>,
    );

    expect(fetchMock).toHaveBeenCalled();
    await waitFor(() => {
      expect(setCharacters).toHaveBeenCalled();
    });
  });

  test("API error render", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue({});
  
    render(
      <FavoritesContext.Provider value={{ favorites, modifyCharacterFavState }}>
        <CharactersContext.Provider value={{ characters: [], setCharacters }}>
          <MainPage />
        </CharactersContext.Provider>
      </FavoritesContext.Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(Translations.error[1])).toBeTruthy();
    });
  })
});
