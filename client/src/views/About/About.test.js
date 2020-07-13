import { render } from "@testing-library/react";
import About from "../About";
import { MemoryRouter } from "react-router-dom";
import React from "react";

test("About component test", async () => {
  const { container } = render(<About />, { wrapper: MemoryRouter });
  expect(container.innerHTML).toMatch("About T9");
  expect(container.innerHTML).toMatch(
    "originally developed by Tegic Communications, now part"
  );
  expect(container.innerHTML).toMatch(
    "PDA's such as Avigo during the late 1990s"
  );
  expect(container.innerHTML).toMatch("phones without a touch");
});
