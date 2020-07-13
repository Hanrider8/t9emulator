import React from "react";
import styles from "./Settings.module.css";
import PropTypes from "prop-types";

const Settings = ({ onClickCheckbox, userParams: { fetchOnKey, onlyWords } }) => (
  <div className={styles.container}>
    <div className={styles.switch_blok}>
      <label className={styles.switch}>
        <input
            id="fetchOnKey-checkbox"
          type="checkbox"
          checked={fetchOnKey}
          onChange={() => onClickCheckbox("fetchOnKey")}
        />
        <span className={styles.slider}></span>
      </label>
      <div>Every Input</div>
    </div>
    <div className={styles.switch_blok}>
      <label className={styles.switch}>
        <input
            id="onlyWords-checkbox"
          type="checkbox"
          checked={onlyWords}
          onChange={() => onClickCheckbox("onlyWords")}
        />
        <span className={styles.slider}></span>
      </label>
      <div>Only Words</div>
    </div>
  </div>
);

Settings.propTypes = {
    onClickCheckbox: PropTypes.func,
    fetchOnKey: PropTypes.bool,
    onlyWords: PropTypes.bool
}

export default React.memo(Settings)