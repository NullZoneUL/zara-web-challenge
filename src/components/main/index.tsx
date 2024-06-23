import CharacterListComponent from "@components/character-list";
import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import {
  getFromApi,
  ApiServices,
  BASE_API_URL,
  MAX_NUM_CHARACTERS,
} from "@utils/requests";
import { FavoritesContext, CharactersContext } from "@components/container";
import { createFavoritesIDsArray } from "@utils/favorites";
import { EmptyCharacterID } from "@elements/character/character";

const MainPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const { characters, setCharacters } = useContext(CharactersContext);

  const numResults = useRef(MAX_NUM_CHARACTERS);

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
      limit: MAX_NUM_CHARACTERS.toString(),
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
    if (
      !characters ||
      characters.length === 0 ||
      characters[0].id === EmptyCharacterID
    ) {
      getCharacters();
    }
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
