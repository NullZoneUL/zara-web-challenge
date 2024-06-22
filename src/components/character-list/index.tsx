import Searcher from "@elements/searcher";
import CharacterList from "./list";

interface CharacterListComponentProps {
  numResults: number;
  characterList: Character[];
  favoritesList: number[];
  onSearchInput: (value: string) => void;
}

const CharacterListComponent = ({
  numResults,
  characterList,
  favoritesList,
  onSearchInput,
}: CharacterListComponentProps) => {
  return (
    <>
      <Searcher numResults={numResults} onInput={onSearchInput} />
      <CharacterList
        characterList={characterList}
        favoritesList={favoritesList}
      />
    </>
  );
};

export default CharacterListComponent;
