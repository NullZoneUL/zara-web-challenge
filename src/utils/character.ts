const SELECTED_CHARACTER_KEY = "selected_character_key";

export const setSelectedCharacter = (character: Character) => {
  localStorage.setItem(SELECTED_CHARACTER_KEY, JSON.stringify(character));
};

export const getSelectedCharacter = (): Character =>
  JSON.parse(localStorage.getItem(SELECTED_CHARACTER_KEY) || "null");
