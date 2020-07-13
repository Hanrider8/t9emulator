import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Views from "../views";

test("Views component test", () => {
  const { container } = render(<Views />, { wrapper: MemoryRouter });
  expect(container.innerHTML).toMatch("T9 Emul");
});
