import React from "react";
import styles from "./Pagination.module.css";

export default ({ changePage, pages, page }) => (
  <div className={styles.container}>
    {page > 1 && <span onClick={() => changePage(page - 1)}>Back</span>}
    <div>{page}</div>
    <div>/</div>
    <div>{pages}</div>
    {page < pages && <span onClick={() => changePage(page + 1)}>Next</span>}
  </div>
);
