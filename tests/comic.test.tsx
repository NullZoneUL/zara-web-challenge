import ComicItem from "@elements/comic";
import { render } from "@testing-library/react";

describe("Comic item tests", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: { results: [] } }),
    } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Basic render", () => {
    const { container } = render(
      <ComicItem
        data={{
          resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
          name: "Avengers: The Initiative (2007) #17",
        }}
      />,
    );
    expect(container.getElementsByClassName("comic-name")[0].innerHTML).toBe(
      "Avengers: The Initiative #17",
    );
    expect(container.getElementsByClassName("comic-year")[0].innerHTML).toBe(
      "2007",
    );
  });

  test("No year", () => {
    const { container } = render(
      <ComicItem
        data={{
          resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
          name: "Avengers: The Initiative #17",
        }}
      />,
    );
    expect(container.getElementsByClassName("comic-name")[0].innerHTML).toBe(
      "Avengers: The Initiative #17",
    );
    expect(container.getElementsByClassName("comic-year")[0].innerHTML).toBe(
      "",
    );
  });

  test("Only year", () => {
    const { container } = render(
      <ComicItem
        data={{
          resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
          name: "(2007)",
        }}
      />,
    );
    expect(container.getElementsByClassName("comic-name")[0].innerHTML).toBe(
      "",
    );
    expect(container.getElementsByClassName("comic-year")[0].innerHTML).toBe(
      "2007",
    );
  });

  test("Nothing as name", () => {
    const { container } = render(
      <ComicItem
        data={{
          resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
          name: "",
        }}
      />,
    );
    expect(container.getElementsByClassName("comic-name")[0].innerHTML).toBe(
      "",
    );
    expect(container.getElementsByClassName("comic-year")[0].innerHTML).toBe(
      "",
    );
  });
});
