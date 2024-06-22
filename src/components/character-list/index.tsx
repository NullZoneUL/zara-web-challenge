import Searcher from "@elements/searcher";
import CharacterList from "./list";

interface CharacterListComponentProps {
  numResults: number;
  characterList: Character[];
  onSearchInput: (value: string) => void;
}

const CharacterListComponent = ({
  numResults,
  characterList,
  onSearchInput,
}: CharacterListComponentProps) => {
  return (
    <>
      <Searcher numResults={numResults} onInput={onSearchInput} />
      <CharacterList characterList={characterList} />
    </>
  );
};

export default CharacterListComponent;
