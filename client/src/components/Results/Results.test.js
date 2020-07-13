import { render } from "@testing-library/react";
import Results from "../Results";
import React from "react";

test("Results component test", () => {
  const changePage = jest.fn();
  const { container, rerender } = render(
    <Results
      changePage={changePage}
      req={{ error: "", data: { results: [], num: 0 } }}
    />
  );
  expect(container.innerHTML).toMatch("No results");
  rerender(
    <Results
      changePage={changePage}
      req={{ error: "test error", data: { results: [], num: 0, page: 1 } }}
    />
  );
  expect(container.innerHTML).toMatch("test error");
  rerender(
    <Results
      changePage={changePage}
      req={{
        data: { results: [["ad", "ae", "af", "bd", "be"]], page: 1, num: 5 },
        word: false,
      }}
    />
  );
  expect(container.innerHTML).toMatch("af");
  expect(container.innerHTML).toMatch("font-size: 0.7em");
  expect(container.innerHTML).toMatch('class="results">5<');
  rerender(
    <Results
      changePage={changePage}
      req={{
        data: { results: [["ad", "ae", "af", "bd", "be"]], page: 1 },
        word: true,
      }}
    />
  );
  expect(container.innerHTML).toMatch("bd");
  expect(container.innerHTML).toMatch("font-size: 1.3em");
  rerender(
    <Results
      changePage={changePage}
      req={{ data: { results: [], num: 0, page: 1 }, loading: true }}
    />
  );
  expect(container.innerHTML).toMatch('class="loader"');
  rerender(
    <Results
      changePage={changePage}
      req={{
        data: {
          results: [
            ["ad", "ae"],
            ["af", "bd", "be"],
          ],
          page: 1,
        },
      }}
    />
  );
  expect(container.innerHTML).toMatch("1  /  2");
});
