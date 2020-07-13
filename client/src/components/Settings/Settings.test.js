import { render, fireEvent } from "@testing-library/react";

import Settings from "../Settings";
import React from "react";

test("Settings component test", async () => {
  const onClick = jest.fn();
  const { container } = render(
    <Settings
      onClickCheckbox={onClick}
      userParams={{ fetchOnKey: true, onlyWords: true }}
    />
  );
  const fetchOnKeyInput = container.querySelectorAll("input")[0];
  const onlyWordsInput = container.querySelectorAll("input")[1];
  expect(container.innerHTML).toMatch("Every Input");
  expect(container.innerHTML).toMatch("Only Words");
  expect(fetchOnKeyInput).toBeChecked();
  expect(fetchOnKeyInput).toBeChecked();
  fireEvent.click(fetchOnKeyInput);
  expect(onClick).toHaveBeenCalled();
  fireEvent.click(onlyWordsInput);
  expect(onClick).toHaveBeenCalled();
});
