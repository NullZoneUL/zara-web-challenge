import CharacterListComponent from "@components/character-list";
import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { getFromApi, ApiServices, BASE_API_URL } from "@utils/requests";
import { FavoritesContext, CharactersContext } from "@components/container";
import { createFavoritesIDsArray } from "@utils/favorites";

const MAX_NUM_ITEMS = 50;

const MainPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const { characters, setCharacters } = useContext(CharactersContext);

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

    getFromApi(`${BASE_API_URL}${ApiServices.characters}`, params).then(
      (response: Characters) => {
        numResults.current = response.count;
        setCharacters(response.results);
      },
    );
  };

  useEffect(() => {
    characters.length === 0 && getCharacters();
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
