import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputT9 from "../InputT9";
import React from "react";

test("InputT9 component test", async () => {
  const { container, getByText, rerender } = render(
    <InputT9 userParams={{ fetchOnKey: true }} />
  );
  const input = container.querySelector("input");
  await userEvent.type(input, "1234");
  expect(input.value).toBe("1234");
  expect(container.innerHTML).toMatch("C");
  expect(getByText(/Send/i).closest("button")).toBeDisabled();
  rerender(<InputT9 userParams={{ fetchOnKey: false }} />);
  expect(container.innerHTML).toMatch("grow");
});
