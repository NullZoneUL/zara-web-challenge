import Header from "@elements/header";
import { ReactNode, createContext, useCallback, useState } from "react";
import "./style.scss";

export const FavoritesContext = createContext<{
  favorites: Character[];
  modifyCharacterFavState: (character: Character) => void;
}>({
  favorites: [],
  modifyCharacterFavState: () => {
    /**/
  },
});

const AppContainer = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const modifyCharacterFavState = useCallback(
    (character: Character) => {
      const favIndex = favorites.findIndex((item) => item.id === character.id);
      if (favIndex === -1) {
        setFavorites([...favorites, character]);
        return;
      }

      const favorites_ = [...favorites];
      favorites_.splice(favIndex, 1);
      setFavorites(favorites_);
    },
    [favorites],
  );

  return (
    <FavoritesContext.Provider value={{ favorites, modifyCharacterFavState }}>
      <Header numFavs={favorites.length} />
      <main className="page-container">{children}</main>
    </FavoritesContext.Provider>
  );
};

export default AppContainer;
