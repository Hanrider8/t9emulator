import {render, fireEvent} from "@testing-library/react";
import MobileGrid from "../MobileGrid";
import React from "react";

test('MobileGrid component test', async () => {
  const onClick = jest.fn();
  const { container, getByText } = render(<MobileGrid onClick={onClick}/>)
  expect(container.innerHTML).toMatch('a b c')
  expect(container.innerHTML).toMatch('d e f')
  expect(container.innerHTML).toMatch('j k l')
  fireEvent.click(getByText(/a b c/i))
  expect(onClick).toHaveBeenCalled();
})