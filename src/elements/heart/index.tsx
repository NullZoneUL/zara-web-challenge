import HeartIcon from "@assets/images/heart.svg";
import EmptyHeartIcon from "@assets/images/empty-heart.svg";

interface HeartElementProps {
  fav: boolean;
  onClick: () => void;
  className?: string;
}

const HeartElement = ({ fav, onClick, className }: HeartElementProps) => {
  return (
    <img
      src={fav ? HeartIcon : EmptyHeartIcon}
      className={className}
      onClick={onClick}
    />
  );
};

export default HeartElement;
