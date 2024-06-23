import { EmptyCharacterItem } from "@elements/character/character";

export const createEmptyCharactersArray = (num: number) =>
  [...Array(num).keys()].map(() => {
    return { ...EmptyCharacterItem };
  });
