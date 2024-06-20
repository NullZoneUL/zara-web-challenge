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
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Series {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Events {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Item {
  resourceURI: string;
  name: string;
  type?: string;
}

interface Url {
  type: string;
  url: string;
}
