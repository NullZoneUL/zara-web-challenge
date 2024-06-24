import CharacterListComponent from "@components/character-list";
import Translations from "@assets/translations/en.json";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  getFromApi,
  ApiServices,
  BASE_API_URL,
  MAX_NUM_CHARACTERS,
} from "@utils/requests";
import { FavoritesContext, CharactersContext } from "@components/container";
import { createFavoritesIDsArray } from "@utils/favorites";
import { EmptyCharacterID } from "@elements/character/character";
import './style.scss';

//In order to preserve the last search value between navigation, the value has to be saved outside React flow
let lastSearchInput = "";

enum API_STATES {
  'PENDING',
  'OK',
  'ERROR'
}

const MainPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const { characters, setCharacters } = useContext(CharactersContext);

  const [state, setState] = useState(characters?.length > 0 ? API_STATES.OK : API_STATES.PENDING);
  const numResults = useRef(MAX_NUM_CHARACTERS);

  const favoritesIds = useMemo(
    () => createFavoritesIDsArray(favorites),
    [favorites],
  );

  const onSearchInput = useCallback((value: string) => {
    lastSearchInput = value;
    getCharacters(value);
  }, []);

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
        setState(API_STATES.OK);
        setCharacters(response.results);
      },
    ).catch(() => {
        setState(API_STATES.ERROR);
    });
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

  if(state === API_STATES.ERROR) {
    return (
      <div className="api-error">
        {Translations.error[0]}
        <span>{Translations.error[1]}</span>
        {Translations.error[2]}
      </div>
    )
  }

  return (
    <CharacterListComponent
      characterList={characters}
      numResults={numResults.current}
      onSearchInput={onSearchInput}
      favoritesList={favoritesIds}
      defaultValue={lastSearchInput}
    />
  );
};

export default MainPage;
