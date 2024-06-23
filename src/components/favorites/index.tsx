import CharacterListComponent from "@components/character-list";
import Translations from "@assets/translations/en.json";
import { useCallback, useContext, useMemo, useState } from "react";
import { FavoritesContext } from "@components/container";
import { createFavoritesIDsArray } from "@utils/favorites";
import "./style.scss";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const [items, setItems] = useState(favorites);

  const ids = useMemo(() => createFavoritesIDsArray(favorites), [favorites]);
  const numresults = useMemo(() => items.length, [items]);

  const onSearchInput = useCallback(
    (value: string) => {
      setItems(favorites.filter((item) => item.name.includes(value)));
    },
    [favorites],
  );

  //If a card is removed from favorites here, it won't be deleted from the dom until we make a new search
  //to give the user the possibility of saving it again in the same view
  return (
    <div className="favorites-container">
      <h1>{Translations.favorites}</h1>
      <CharacterListComponent
        characterList={items}
        numResults={numresults}
        onSearchInput={onSearchInput}
        favoritesList={ids}
      />
    </div>
  );
};

export default FavoritesPage;
