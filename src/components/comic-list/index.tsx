import ComicItem from "@elements/comic";
import Translations from "@assets/translations/en.json";

interface ComicListProps {
  items: Item[];
}

const ComicList = ({ items }: ComicListProps) => {
  return (
    <div className="comic-list-container">
      <h2>{Translations.comics}</h2>
      <div className="comic-list">
        {items.map((item, index) => (
          <ComicItem data={item} key={`COMIC_ITEM_${item.name}_${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ComicList;
