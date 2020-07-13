import { render } from "@testing-library/react";
import Rules from "../Rules";
import React from "react";

test("Rules component test", () => {
  const { container } = render(<Rules />);
  expect(container.innerHTML).toMatch("Rules");
  expect(container.innerHTML).toMatch("autofetch on input by default");
  expect(container.innerHTML).toMatch("OPTIONS:");
  expect(container.innerHTML).toMatch("Every Input");
  expect(container.innerHTML).toMatch(
    "disable auto fetch / enable SEND button for manual fetching"
  );
});
