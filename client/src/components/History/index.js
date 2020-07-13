import React from "react";
import styles from "./History.module.css";
import { getHistory } from "../../util";

const History = () => (
  <div className={styles.container}>
    <div className={styles.title}>History</div>
    <div className={styles.items}>
      {getHistory()
        .reverse()
        .map((h, i) => (
          <a
            className={`${styles.item} grow`}
            href={`/t9/${h}`}
            key={h + Date.now() + i}
          >
            {h}
          </a>
        ))}
    </div>
  </div>
);

export default React.memo(History);
