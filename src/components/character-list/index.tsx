import Searcher from "@elements/searcher";
import CharacterList from "./list";

interface CharacterListComponentProps {
  numResults: number;
  characterList: Character[];
  favoritesList: number[];
  onSearchInput: (value: string) => void;
  defaultValue?: string;
}

const CharacterListComponent = ({
  numResults,
  characterList,
  favoritesList,
  defaultValue = "",
  onSearchInput,
}: CharacterListComponentProps) => {
  return (
    <>
      <Searcher
        numResults={numResults}
        onInput={onSearchInput}
        defaultValue={defaultValue}
      />
      <CharacterList
        characterList={characterList}
        favoritesList={favoritesList}
      />
    </>
  );
};

export default CharacterListComponent;
