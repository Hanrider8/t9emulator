import React from "react";
import styles from "./Results.module.css";
import spinner from "../../static/spinner.svg";
import Pagination from "../Pagination";

export default ({
  data,
  loading,
  error,
  userParams: { wordsOnly, page },
  changePage,
}) => {
  let content = <div className={styles.notice}>No results</div>;
  const { results, num } = data;

  if (loading) content = <img alt="loading" src={spinner}></img>;
  if (error) content = <div className={styles.notice}>{error}</div>;
  if (!loading && results.length > 0) {
    content = results[page - 1].map((str) => (
      <div
        style={{ fontSize: wordsOnly ? "1.3em" : "0.7em" }}
        className={styles.result}
        key={str}
      >
        {str}
      </div>
    ));
  }

  return (
    <div className={styles.container}>
      {data.num > 0 && <div className={styles.results}>{num}</div>}
      {content}
      {results.length > 1 && (
        <Pagination
          changePage={changePage}
          pages={results.length}
          page={page}
        />
      )}
    </div>
  );
};
