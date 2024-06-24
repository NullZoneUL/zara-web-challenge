import CharacterItem from "@elements/character";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { EmptyCharacterItem } from "@elements/character/character";
import { FavoritesContext } from "@components/container";

describe("Character item behavior tests", () => {
  const id = 1;
  const name = "testing";
  const itemData = { ...EmptyCharacterItem, id, name };

  test("Basic render", () => {
    const { container } = render(
      <BrowserRouter>
        <CharacterItem data={itemData} fav={false} />
      </BrowserRouter>,
    );
    expect(
      container.getElementsByClassName("character-item-container").length,
    ).toBe(1);
    expect(screen.getByText(name)).toBeTruthy();
    expect(container.getElementsByClassName("fav-character-heart").length).toBe(
      0,
    );
  });

  test("Favorite item", () => {
    const { container } = render(
      <BrowserRouter>
        <CharacterItem data={itemData} fav={true} />
      </BrowserRouter>,
    );
    expect(container.getElementsByClassName("fav-character-heart").length).toBe(
      1,
    );
  });

  test("Click on heart", () => {
    const favorites: Character[] = [];
    const modifyCharacterFavState = jest.fn();

    const { container } = render(
      <BrowserRouter>
        <FavoritesContext.Provider
          value={{ favorites, modifyCharacterFavState }}
        >
          <CharacterItem data={itemData} fav={true} />
        </FavoritesContext.Provider>
      </BrowserRouter>,
    );

    fireEvent.click(container.getElementsByClassName("fav-character-heart")[0]);
    expect(modifyCharacterFavState).toHaveBeenCalled();
  });

  test("Empty character", () => {
    const { container } = render(
      <BrowserRouter>
        <CharacterItem data={EmptyCharacterItem} fav={true} />
      </BrowserRouter>,
    );
    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(container.getElementsByClassName("fav-character-heart").length).toBe(
      0,
    );
  });
});
