import HeartElement from "@elements/heart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Routes } from "@router/utils";
import { FavoritesContext } from "@components/container";
import "./style.scss";

interface CharacterItemProps {
  data: Character;
  fav: boolean;
}

const CharacterItem = ({ data, fav }: CharacterItemProps) => {
  const { modifyCharacterFavState } = useContext(FavoritesContext);
  const { id, thumbnail } = data;

  return (
    <div className="character-item-container">
      <Link to={`/${Routes.character}/${id}`}>
        <div
          className={`character-item-image-container ${thumbnail.path.indexOf("image_not_available") > -1 ? "character-item-no-image" : ""}`}
        >
          <img src={`${thumbnail.path}.${thumbnail.extension}`} />
        </div>
      </Link>
      <div className="character-info-container">
        <div className="character-info">
          <div>{data.name}</div>
          <HeartElement
            fav={fav}
            className={fav ? "fav-character-heart" : ""}
            onClick={() => modifyCharacterFavState(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
