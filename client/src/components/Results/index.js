import React from "react";
import styles from "./Results.module.css";
import Pagination from "../Pagination";

export default ({
  req: { error, data, loading },
  userParams: { onlyWords },
  changePage,
}) => {
  let content = <div className={styles.notice}>No results</div>;
  if (loading) content = <div className={styles.loader}></div>;
  if (error) content = <div className={styles.notice}>{error}</div>;

  const { results, num, page } = data;
  if (!loading && !error && results.length > 0) {
    content = results[page - 1].map((str) => (
      <div
        style={{ fontSize: onlyWords ? "1.3em" : "0.7em" }}
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
