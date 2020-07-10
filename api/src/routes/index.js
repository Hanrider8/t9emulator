import T9Converter from "../services/T9Converter";
import { words } from "../services/WordService";

export default (app) => {
  app.get("/_api/t9", (req, res) => {
    const { t9, onlyWords } = req.query;
    if (t9.length > 10) {
      res.status(400).send({ message: "T9 number is too large!" });
    } else {
      const resultStrings = T9Converter(t9) || [];
      res.send(
        onlyWords === "true" ? resultStrings.filter((str) => words.includes(str)) : resultStrings
      );
    }
  });
};
