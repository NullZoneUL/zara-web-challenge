import CharacterItem from "@elements/character";
import "./style.scss";

interface CharacterListProps {
  characterList: Character[];
}

const CharacterList = ({ characterList }: CharacterListProps) => {
  return (
    <div className="character-list-container">
      {characterList.map((item, index) => (
        <CharacterItem
          data={item}
          key={`CHARACTER_ITEM_${item.id}_${index}`}
          fav={false}
        />
      ))}
    </div>
  );
};

export default CharacterList;
