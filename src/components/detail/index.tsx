import HeartElement from "@elements/heart";
import ComicList from "@components/comic-list";
import Translations from "@assets/translations/en.json";
import { useEffect, useContext, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "@router/utils";
import { getSelectedCharacter } from "@utils/character";
import { FavoritesContext } from "@components/container";
import { createFavoritesIDsArray } from "@utils/favorites";
import "./style.scss";

const MAX_NUM_COMICS = 20;

const CharacterDetailPage = () => {
  const { favorites, modifyCharacterFavState } = useContext(FavoritesContext);
  const data = getSelectedCharacter();
  const navigate = useNavigate();

  const favoritesIds = useMemo(
    () => createFavoritesIDsArray(favorites),
    [favorites],
  );

  const comicList = useMemo(
    () => data.comics.items.slice(0, MAX_NUM_COMICS),
    [data],
  );

  const onHeartClick = useCallback(() => {
    modifyCharacterFavState(data);
  }, [data, modifyCharacterFavState]);

  useEffect(() => {
    //In case there wasn't any character saved in the context, index page would be displayed
    !data && navigate(`/${Routes.index}`);
  }, [data, navigate]);

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
      {comicList?.length > 0 && <ComicList items={comicList} />}
    </div>
  );
};

export default CharacterDetailPage;
