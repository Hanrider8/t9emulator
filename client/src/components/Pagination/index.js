import React from "react";
import styles from "./Pagination.module.css";

export default ({ onClick }) => (
  <div className={styles.container}>
    <a>Back</a>
    <a>Next</a>
  </div>
);
