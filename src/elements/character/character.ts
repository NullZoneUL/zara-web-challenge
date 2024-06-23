import loadingImage from "@assets/images/loading.gif";

export const EmptyCharacterID = -1;

export const EmptyCharacterItem: Character = {
  id: EmptyCharacterID,
  name: "",
  description: "",
  thumbnail: {
    path: loadingImage.substring(0, loadingImage.length - 4),
    extension: "gif",
  },
  comics: {
    available: EmptyCharacterID,
    collectionURI: "",
    items: [],
    returned: EmptyCharacterID,
  },
};
