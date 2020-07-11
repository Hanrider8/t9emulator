import React from "react";
import styles from "./Pagination.module.css";

export default ({ changePage, pages, page }) => (
  <div className={styles.container}>
    {page > 1 && <a onClick={() => changePage(page - 1)}>Back</a>}
    <div>{page}</div>
    <div>/</div>
    <div>{pages}</div>
    {page < pages && <a onClick={() => changePage(page + 1)}>Next</a>}
  </div>
);
