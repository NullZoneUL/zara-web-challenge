import MainPage from "@components/main";
import { render, waitFor } from "@testing-library/react";
import { FavoritesContext, CharactersContext } from "@components/container";
import { EmptyCharacterItem } from "@elements/character/character";

describe("Main page render tests", () => {
  const id = 23;
  const name = "Testing";
  const favorites: Character[] = [];
  const modifyCharacterFavState = jest.fn();
  const setCharacters = jest.fn();
  const character = { ...EmptyCharacterItem, id, name };
  let fetchMock: any;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: { results: [character] } }),
    } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Basic render", async () => {
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
});
