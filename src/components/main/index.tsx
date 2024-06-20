import Searcher from "@elements/searcher";
import { useCallback, useEffect, useRef, useState } from "react";
import { getFromApi, ApiServices } from "@utils/requests";

const MAX_NUM_ITEMS = 50;
const REQUEST_TIME = 500;

const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [elements, setElements] = useState<Character[]>();
  const numResults = useRef(MAX_NUM_ITEMS);
  const requestTimeout = useRef<number>();

  const onSearchInput = useCallback(
    (value: string) => setSearchValue(value),
    [],
  );

  useEffect(() => {
    window.clearTimeout(requestTimeout.current);

    requestTimeout.current = window.setTimeout(() => {
      getFromApi(ApiServices.characters, {
        limit: MAX_NUM_ITEMS.toString(),
      }).then((response: Characters) => {
        numResults.current = response.count;
        setElements(response.results);
      });
    }, REQUEST_TIME);

    return () => {
      window.clearTimeout(requestTimeout.current);
    };
  }, [searchValue]);
  console.log(elements);
  return (
    <>
      <Searcher numResults={numResults.current} onInput={onSearchInput} />
    </>
  );
};

export default MainPage;
