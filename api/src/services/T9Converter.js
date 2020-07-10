const T9Map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

export default val =>
  val
    .split("")
    .map(n => T9Map[n] || [""])
    .reduce((accu, num) => {
      const final = [];
      accu.reduce((_, num2) => num.map(n => final.push(num2 + n)), "");
      return final;
    });
