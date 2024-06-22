import CharacterListComponent from "@components/character-list";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getFromApi, ApiServices } from "@utils/requests";
import { FavoritesContext } from "@components/container";
import { createFavoritesIDsArray } from "@utils/favorites";

const MAX_NUM_ITEMS = 50;

const MainPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const [characters, setCharacters] = useState<Character[]>([]);
  const numResults = useRef(MAX_NUM_ITEMS);

  const favoritesIds = useMemo(
    () => createFavoritesIDsArray(favorites),
    [favorites],
  );

  const onSearchInput = useCallback(
    (value: string) => getCharacters(value),
    [],
  );

  const getCharacters = (searchValue?: string) => {
    const params: { [key: string]: string } = {
      limit: MAX_NUM_ITEMS.toString(),
    };

    if (searchValue) {
      params.nameStartsWith = searchValue;
    }

    getFromApi(ApiServices.characters, params).then((response: Characters) => {
      numResults.current = response.count;
      setCharacters(response.results);
    });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <CharacterListComponent
      characterList={characters}
      numResults={numResults.current}
      onSearchInput={onSearchInput}
      favoritesList={favoritesIds}
    />
  );
};

export default MainPage;
