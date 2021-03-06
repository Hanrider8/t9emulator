const getLocal = () => {
  const localString = window.localStorage.getItem("history");
  return localString ? JSON.parse(localString) : [];
};

export const chunkArray = (arr, size) => {
  if (arr.length === 0) return [];
  return arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr];
};

export const getHistory = () => getLocal();

export const setHistory = (val) => {
  const newHistory = getLocal();
  if (newHistory[9] !== val) {
    while (newHistory.length >= 10) {
      newHistory.shift();
    }
    newHistory.push(val);
    window.localStorage.setItem("history", JSON.stringify(newHistory));
  }
};
