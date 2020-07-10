import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default ({ header }) => (
  <div className={`center-flex ${styles.container}`}>
    <div className={styles.title}>{header}</div>
    <ul className={styles.list}>
      <li>
        <Link to="/">
          <div>Home</div>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <div>About</div>
        </Link>
      </li>
    </ul>
  </div>
);
