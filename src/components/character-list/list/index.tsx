import CharacterItem from "@elements/character";
import "./style.scss";

interface CharacterListProps {
  characterList: Character[];
  favoritesList: number[];
}

const CharacterList = ({
  characterList,
  favoritesList,
}: CharacterListProps) => {
  return (
    <div className="character-list-container">
      {characterList.map((item, index) => (
        <CharacterItem
          data={item}
          key={`CHARACTER_ITEM_${item.id}_${index}`}
          fav={favoritesList.indexOf(item.id) !== -1}
        />
      ))}
    </div>
  );
};

export default CharacterList;
