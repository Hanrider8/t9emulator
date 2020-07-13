import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";

test("Header component test", () => {
  const { container, rerender } = render(<Header header={"test header"} />, {
    wrapper: MemoryRouter,
  });
  expect(container.innerHTML).toMatch("test header");
  expect(container.innerHTML).toMatch("Home");
  expect(container.innerHTML).toMatch("About");
  rerender(<Header header={"test header2"} />, { wrapper: MemoryRouter });
  expect(container.innerHTML).toMatch("test header2");
});
