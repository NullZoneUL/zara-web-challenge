import HeartElement from "@elements/heart";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Heart element tests", () => {
  const onClick = jest.fn();

  test("Classname", () => {
    const { container } = render(
      <HeartElement fav onClick={onClick} className="test" />,
    );
    expect(container.getElementsByClassName("test").length).toBe(1);
  });

  test("onClick", () => {
    render(<HeartElement fav={false} onClick={onClick} />);

    fireEvent.click(screen.getByRole("img"));
    expect(onClick).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("img"));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
