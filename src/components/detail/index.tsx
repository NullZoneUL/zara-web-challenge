import HeartElement from "@elements/heart";
import ComicList from "@components/comic-list";
import Translations from "@assets/translations/en.json";
import { useEffect, useContext, useMemo, useCallback, useState } from "react";
import { FavoritesContext, CharactersContext } from "@components/container";
import { createFavoritesIDsArray } from "@utils/favorites";
import { getFromApi, BASE_API_URL, ApiServices } from "@utils/requests";
import "./style.scss";

interface CharacterDetailPageProps {
  id: string;
}

const MAX_NUM_COMICS = 20;

const CharacterDetailPage = ({ id }: CharacterDetailPageProps) => {
  const { favorites, modifyCharacterFavState } = useContext(FavoritesContext);
  const { characters } = useContext(CharactersContext);
  const [data, setData] = useState(
    characters?.find((item) => item.id === parseInt(id)),
  );

  const favoritesIds = useMemo(
    () => createFavoritesIDsArray(favorites),
    [favorites],
  );

  const comicList = useMemo(
    () => data?.comics.items.slice(0, MAX_NUM_COMICS),
    [data],
  );

  const onHeartClick = useCallback(() => {
    modifyCharacterFavState(data!);
  }, [data, modifyCharacterFavState]);

  useEffect(() => {
    !data &&
      getFromApi(`${BASE_API_URL}${ApiServices.characters}/${id}`).then(
        (response: Characters) => setData(response.results[0]),
      );
  }, [data]);

  if (!data) {
    return <></>;
  }

  return (
    <div className="character-detail-container">
      <div className="character-detail-header">
        <div className="character-detail-header-content">
          <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
          <div className="character-detail-info">
            <div className="character-detail-info-center">
              <div className="character-detail-title">
                <h1>{data.name}</h1>
                <HeartElement
                  fav={favoritesIds.indexOf(data.id) !== -1}
                  onClick={onHeartClick}
                />
              </div>
              <p>{data.description || Translations.no_description}</p>
            </div>
          </div>
        </div>
      </div>
      {comicList && comicList.length > 0 && <ComicList items={comicList} />}
    </div>
  );
};

export default CharacterDetailPage;
