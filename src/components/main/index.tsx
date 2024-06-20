import Searcher from "@elements/searcher";
import { useCallback } from "react";

const MainPage = () => {
  const onSearchInput = useCallback((value: string) => {
    console.log(value);
  }, []);

  return (
    <>
      <Searcher numResults={50} onInput={onSearchInput} />
    </>
  );
};

export default MainPage;
