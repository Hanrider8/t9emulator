import React from "react";
import styles from "./Rules.module.css";
import { getHistory } from "../../util";

export default () => (
  <div className={styles.container}>
    <div className={styles.title}>Rules</div>
    <div className={styles.items}>
      <p>- max 9 numbers</p>
      <p>- autofetch on input by default</p>
      <p>OPTIONS:</p>
      <p>
        Every Input - disable auto fetch / enable SEND button for manual
        fetching
      </p>
      <p>Only Words - fetch only words</p>
    </div>
  </div>
);
