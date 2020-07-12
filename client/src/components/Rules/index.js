import React from "react";
import styles from "./Rules.module.css";

export default () => (
  <div className={styles.container}>
    <div className={styles.title}>Rules</div>
    <div className={styles.items}>
      <ul>
        <li>max 9 numbers</li>
        <li>autofetch on input by default</li>
      </ul>
      <div className={styles.option_title}>OPTIONS:</div>
      <div className={styles.option_item}>
        <div>Every Input</div>
        <div>disable auto fetch / enable SEND button for manual fetching</div>
      </div>
      <div className={styles.option_item}>
        <div>Only Words</div>
        <div>fetch only words</div>
      </div>
    </div>
  </div>
);
