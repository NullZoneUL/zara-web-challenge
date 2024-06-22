import HeartElement from "@elements/heart";
import Translations from "@assets/translations/en.json";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "@router/utils";
import { getSelectedCharacter } from "@utils/character";
import "./style.scss";

const CharacterDetailPage = () => {
  const data = getSelectedCharacter();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
    //In case there wasn't any character saved in the context, index page would be displayed
    !data && navigate(`/${Routes.index}`);
  }, [data]);

  if (!data) {
    return <></>;
  }

  return (
    <div className="character-detail-container">
      <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
      <div className="character-detail-info">
        <div className="character-detail-title">
          <h2>{data.name}</h2>
          <HeartElement fav={true} onClick={() => console.log("TODO!!!!")} />
        </div>
        <p>{data.description || Translations.no_description}</p>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
