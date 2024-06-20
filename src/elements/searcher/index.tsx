import SearchIcon from "@assets/images/search.svg";
import Translations from "@assets/translations/en.json";
import "./style.scss";

interface SearcherProps {
  numResults: number;
  onInput: (value: string) => void;
}

const Searcher = ({ numResults, onInput }: SearcherProps) => {
  return (
    <div className="searcher-container">
      <div className="searcher-input-container">
        <img src={SearchIcon} />
        <input
          type="text"
          placeholder={Translations.search}
          onInput={(event) => onInput(event.currentTarget.value)}
        />
      </div>
      <div className="searcher-num-results">{`${numResults} ${Translations.results}`}</div>
    </div>
  );
};

export default Searcher;
