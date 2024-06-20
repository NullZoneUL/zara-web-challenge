import SearchIcon from "@assets/images/search.svg";
import Translations from "@assets/translations/en.json";
import { useEffect, useRef } from "react";
import "./style.scss";

interface SearcherProps {
  numResults: number;
  onInput: (value: string) => void;
}

const TIME_UPDATE = 300;

const Searcher = ({ numResults, onInput }: SearcherProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const updateTimeout = useRef<number>();

  const onInput_ = () => {
    window.clearTimeout(updateTimeout.current);
    updateTimeout.current = window.setTimeout(() => {
      onInput(inputRef.current!.value);
    }, TIME_UPDATE);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(updateTimeout.current);
    };
  }, []);

  return (
    <div className="searcher-container">
      <div className="searcher-input-container">
        <img src={SearchIcon} />
        <input
          type="text"
          placeholder={Translations.search}
          onInput={onInput_}
          ref={inputRef}
        />
      </div>
      <div className="searcher-num-results">{`${numResults} ${Translations.results}`}</div>
    </div>
  );
};

export default Searcher;
