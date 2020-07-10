export default {
  PORT: process.env.PORT || 3001,
  NON_PRODUCTION: process.env.NODE_ENV !== "production",
  WORD_LIST_URL: "https://raw.githubusercontent.com/eneko/data-repository/master/data/words.txt"
};
