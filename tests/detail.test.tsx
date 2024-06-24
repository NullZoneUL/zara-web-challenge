import CharacterDetailPage from "@components/detail";
import Translations from "@assets/translations/en.json";
import { render, screen } from "@testing-library/react";
import { CharactersContext } from "@components/container";
import { EmptyCharacterItem } from "@elements/character/character";

describe("Detail page render tests", () => {
  const testID = 23;
  const name = "Test";
  const character = { ...EmptyCharacterItem, id: testID, name };

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: { results: [character] } }),
    } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Character no description", () => {
    const { container } = render(
      <CharactersContext.Provider
        value={{ characters: [character], setCharacters: jest.fn() }}
      >
        <CharacterDetailPage id={testID.toString()} />
      </CharactersContext.Provider>,
    );

    expect(screen.getByText(name)).toBeTruthy();
    expect(screen.getByText(Translations.no_description)).toBeTruthy();
    expect(
      container.getElementsByClassName("comic-list-container").length,
    ).toBe(0);
  });

  test("Character description", () => {
    const description = "Testing this element";
    render(
      <CharactersContext.Provider
        value={{
          characters: [{ ...character, description: description }],
          setCharacters: jest.fn(),
        }}
      >
        <CharacterDetailPage id={testID.toString()} />
      </CharactersContext.Provider>,
    );

    expect(screen.getByText(description)).toBeTruthy();
  });

  test("Character with comics", () => {
    const comics = {
      available: 0,
      collectionURI: "",
      returned: 0,
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
          name: "Avengers: The Initiative (2007) #17",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
          name: "Avengers: The Initiative (2003) #17",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
          name: "Avengers: The Initiative (2007) #15",
        },
      ],
    };

    const { container } = render(
      <CharactersContext.Provider
        value={{
          characters: [{ ...character, comics }],
          setCharacters: jest.fn(),
        }}
      >
        <CharacterDetailPage id={testID.toString()} />
      </CharactersContext.Provider>,
    );

    expect(screen.getByText(Translations.comics)).toBeTruthy();
    expect(container.getElementsByClassName("comic-item").length).toBe(
      comics.items.length,
    );
  });
});
