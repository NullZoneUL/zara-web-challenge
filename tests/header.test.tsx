import Header from "@elements/header";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Header render tests", () => {
  test("Basic render", () => {
    const numFavs = 0;
    const { container } = render(
      <BrowserRouter>
        <Header numFavs={numFavs} />
      </BrowserRouter>,
    );

    expect(container.getElementsByClassName("marvel-logo").length).toBe(1);
    expect(container.getElementsByClassName("fav-counter").length).toBe(1);
    expect(screen.getByText(numFavs)).toBeTruthy();
  });

  test("100 favorites", () => {
    const numFavs = 100;
    render(
      <BrowserRouter>
        <Header numFavs={numFavs} />
      </BrowserRouter>,
    );
    expect(screen.getByText(numFavs)).toBeTruthy();
  });

  test("Negative favorites", () => {
    const numFavs = -10;
    render(
      <BrowserRouter>
        <Header numFavs={numFavs} />
      </BrowserRouter>,
    );
    expect(screen.getByText(numFavs)).toBeTruthy();
  });
});
