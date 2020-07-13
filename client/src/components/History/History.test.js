import { render } from "@testing-library/react";
import History from "../History";
import React from "react";

test("History component test", () => {
  window.localStorage.setItem("history", JSON.stringify([234]));

  const { container, getByText } = render(<History />);
  expect(container.innerHTML).toMatch("History");
  expect(container.innerHTML).toMatch("234");
});
