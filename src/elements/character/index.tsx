import HeartIcon from "@assets/images/heart.svg";
import EmptyHeartIcon from "@assets/images/empty-heart.svg";
import { Link } from "react-router-dom";
import { Routes } from "@router/utils";
import "./style.scss";

interface CharacterItemProps {
  data: Character;
  fav: boolean;
}

const CharacterItem = ({ data, fav }: CharacterItemProps) => {
  return (
    <div className="character-item-container">
      <Link to={`/${Routes.index}`}>
        <div
          className={`character-item-image-container ${data.thumbnail.path.indexOf("image_not_available") > -1 ? "character-item-no-image" : ""}`}
        >
          <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
        </div>
      </Link>
      <div className="character-info-container">
        <div className="character-info">
          <div>{data.name}</div>
          <img
            src={fav ? HeartIcon : EmptyHeartIcon}
            className={fav ? "fav-character-heart" : ""}
            onClick={() => console.log("Todo!!!")}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
