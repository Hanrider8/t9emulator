import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ header }) => (
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

Header.propTypes = {
  header: PropTypes.string,
};

export default React.memo(Header);
