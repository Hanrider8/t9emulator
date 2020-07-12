import React from "react";
import styles from "./InputT9.module.css";
import cfg from "../../config";

export default ({
  value,
  onClickButton,
  onChange,
  userParams,
  clear,
  inputRef
}) => (
  <div className={styles.container}>
    <input
      placeholder="Numbers"
      value={value}
      ref={inputRef}
      onChange={onChange}
      type="number"
      maxLength={cfg.MAX_INPUT_LENGTH}
    />
    <div className={`${styles.button_container}`}>
      <button
        className={`${styles.buttons} ${styles.button_clear} grow`}
        onClick={clear}
      >
        C
      </button>
      <button
        className={`${styles.buttons} ${styles.button_send} ${
          !userParams.fetchOnKey && "grow"
        }`}
        disabled={userParams.fetchOnKey}
        onClick={onClickButton}
      >
        Send
      </button>
    </div>
  </div>
);
