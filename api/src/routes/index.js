import T9Converter from "../services/T9Converter";
import { words } from "../services/WordService";

const responseObj = (t9, word, results, error) => ({
  ok: error ? false : true,
  error,
  results,
  t9,
  word
});

export default app => {
  app.get("/_api/t9", (req, res) => {
    const { t9, onlyWords } = req.query;
    if (t9.length > 10) {
      res.status(400).json(responseObj(t9, onlyWords, null, "T9 number is too large!"));
    } else {
      const resultStrings = T9Converter(t9) || [];
      res.send(
        responseObj(
          t9,
          onlyWords,
          onlyWords === "true" ? resultStrings.filter(str => words.includes(str)) : resultStrings
        )
      );
    }
  });
};
