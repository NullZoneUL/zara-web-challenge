import AppContainer from "@components/container";
import CharacterItem from "@elements/character";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { EmptyCharacterItem } from "@elements/character/character";

describe("App container render tests", () => {
  const mockGetItem = jest.fn();
  const mockSetItem = jest.fn();
  beforeEach(() => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation(mockGetItem);
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(mockSetItem);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Basic render", () => {
    const text = "Testing";
    render(
      <BrowserRouter>
        <AppContainer>
          <div>{text}</div>
        </AppContainer>
      </BrowserRouter>,
    );

    expect(screen.getByText(text)).toBeTruthy();
    expect(mockGetItem).toHaveBeenCalled();
  });

  test("Add and remove favorite test", () => {
    const id = 1;
    const name = "testing";
    const itemData = { ...EmptyCharacterItem, id, name };
    const { container } = render(
      <BrowserRouter>
        <AppContainer>
          <CharacterItem data={itemData} fav={false} />
        </AppContainer>
      </BrowserRouter>,
    );
    const heartIcon = container
      .getElementsByClassName("character-info")[0]
      .getElementsByTagName("img")[0];
    const counter = document
      .getElementsByClassName("fav-counter")[0]
      .getElementsByTagName("span")[0];
    fireEvent.click(heartIcon);

    expect(mockSetItem).toHaveBeenCalled();
    expect(counter.innerHTML).toBe("1");

    fireEvent.click(heartIcon);
    expect(counter.innerHTML).toBe("0");
  });
});
