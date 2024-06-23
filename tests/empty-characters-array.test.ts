import { createEmptyCharactersArray } from "@utils/empty-characters-array";
import { EmptyCharacterItem } from "@elements/character/character";

describe("Create an empty characters list", () => {
  test("Length test", () => {
    expect(createEmptyCharactersArray(10).length).toBe(10);
    expect(createEmptyCharactersArray(50).length).toBe(50);
    expect(createEmptyCharactersArray(100).length).toBe(100);
  });

  test("Correct ids test", () => {
    expect(createEmptyCharactersArray(1)[0]).toEqual(EmptyCharacterItem);
  });
});
