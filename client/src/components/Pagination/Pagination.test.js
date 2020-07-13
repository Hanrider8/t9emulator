import { render, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";
import React from "react";

test("Pagination component test", async () => {
  const onClick = jest.fn();
  const { container, rerender, getByText } = render(
    <Pagination changePage={onClick} pages={4} page={1} />
  );
  rerender(<Pagination pages={4} page={1} changePage={onClick} />);
  expect(container.innerHTML).toMatch("1  /  4");
  rerender(<Pagination pages={4} page={2} changePage={onClick} />);
  expect(container.innerHTML).toMatch("2  /  4");
  expect(container.innerHTML).toMatch("Back");
  expect(container.innerHTML).toMatch("Next");
  fireEvent.click(getByText("Next"));
  expect(onClick).toHaveBeenCalled();
  fireEvent.click(getByText("Back"));
  expect(onClick).toHaveBeenCalled();
});
