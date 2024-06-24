import Searcher from "@elements/searcher";
import Translations from "@assets/translations/en.json";
import { render, screen } from "@testing-library/react";

describe("Searcher render tests", () => {
  const callBack = jest.fn();

  test("Basic props", () => {
    const num = 20;
    render(<Searcher numResults={num} onInput={callBack} />);
    expect(screen.getByText(`${num} ${Translations.results}`)).toBeTruthy();
    expect(screen.getByPlaceholderText(Translations.search)).toBeTruthy();
  });

  test("First value and negative number", () => {
    const num = -17;
    const defaultValue = "testing";
    render(
      <Searcher
        numResults={num}
        onInput={callBack}
        defaultValue={defaultValue}
      />,
    );
    expect(screen.getByText(`${num} ${Translations.results}`)).toBeTruthy();
    expect(screen.getByDisplayValue(defaultValue)).toBeTruthy();
  });
});
