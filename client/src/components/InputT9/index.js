import React from "react";
import styles from "./InputT9.module.css";
import cfg from "../../config";
import PropTypes from "prop-types";

const InputT9 = ({
  value,
  onClickButton,
  onChange,
  userParams: { fetchOnKey },
  clear,
  inputRef,
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
          !fetchOnKey && "grow"
        }`}
        disabled={fetchOnKey}
        onClick={onClickButton}
      >
        Send
      </button>
    </div>
  </div>
);

InputT9.propTypes = {
  value: PropTypes.string,
  onClickButton: PropTypes.func,
  onChange: PropTypes.func,
  userParams: PropTypes.object,
  clear: PropTypes.func,
  inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default React.memo(InputT9);
