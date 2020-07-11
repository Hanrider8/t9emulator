import React from "react";
import styles from "./Rules.module.css";
import { getHistory } from "../../util";

export default () => (
  <div className={styles.container}>
    <div className={styles.title}>Rules</div>
    <div className={styles.items}></div>
  </div>
);
