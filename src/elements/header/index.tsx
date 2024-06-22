import MarvelImage from "@assets/images/marvel.webp";
import HeartIcon from "@assets/images/heart.svg";
import { Link } from "react-router-dom";
import { Routes } from "@router/utils";
import "./style.scss";

interface HeaderProps {
  numFavs: number;
}

const Header = ({ numFavs }: HeaderProps) => {
  return (
    <header>
      <Link to={`/${Routes.index}`}>
        <img src={MarvelImage} className="marvel-logo" />
      </Link>

      <Link to={`/${Routes.index}`}>
        <div className="fav-counter">
          <img src={HeartIcon} />
          <span>{numFavs}</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
