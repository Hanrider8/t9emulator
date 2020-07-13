import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";
import React from "react";

test("Home component test", async () => {
  const { container, getByText } = render(<Home />, { wrapper: MemoryRouter });
  expect(container.innerHTML).toMatch("Welcome in T9 emulator");
  const input = container.querySelector("input");
  await userEvent.type(input, "549");
  expect(input.value).toBe("549");
  fireEvent.click(getByText("g h i"));
  expect(input.value).toBe("5494");
});
