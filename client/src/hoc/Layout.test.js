import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";
import React from "react";
import Header from "../components/Header";

test("Layout component test", () => {
  const { container, rerender } = render(
    <Layout header={"test header"} children={<div>test div</div>} />,
    { wrapper: MemoryRouter }
  );
  expect(container.innerHTML).toMatch("test header");
  expect(container.innerHTML).toMatch("test div");
  rerender(<Header header={"test header2"} children={<div>test div2</div>} />, {
    wrapper: MemoryRouter,
  });
  expect(container.innerHTML).toMatch("test header2");
});
