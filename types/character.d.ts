declare interface Characters {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

declare interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Comics;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

declare interface Item {
  resourceURI: string;
  name: string;
  type?: string;
}
