import Searcher from "@elements/searcher";

interface MainPageComponentProps {
  numResults: number;
  characterList: Character[];
  onSearchInput: (value: string) => void;
}

const MainPageComponent = ({
  numResults,
  characterList,
  onSearchInput,
}: MainPageComponentProps) => {
  console.log(characterList);
  return (
    <>
      <Searcher numResults={numResults} onInput={onSearchInput} />
    </>
  );
};

export default MainPageComponent;
