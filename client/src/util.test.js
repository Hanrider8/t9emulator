import { chunkArray, getHistory, setHistory } from "./util";

test("test functions with localstorage", () => {
  setHistory(234);
  expect(getHistory()).toEqual(expect.arrayContaining([234]));
});

test("test chunkArray function", () => {
  expect(chunkArray([])).toEqual(expect.arrayContaining([]));

  expect(chunkArray([1, 2, 3, 4], 2)).toEqual(
    expect.arrayContaining([
      [1, 2],
      [3, 4],
    ])
  );
});
