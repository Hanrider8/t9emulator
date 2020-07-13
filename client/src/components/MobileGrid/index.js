import React from "react";
import styles from "./MobileGrid.module.css";
import PropTypes from "prop-types";

const T9Map = {
  1: ["NONE"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const MobileGrid = ({ onClick }) => (
  <div className={styles.container}>
    {Object.keys(T9Map).map((btn) => (
      <button
        onClick={() => onClick(btn)}
        key={btn}
        className={`${styles["num" + btn]} ${styles.element} grow`}
      >
        <div>{btn}</div>
        <div>{T9Map[btn].join().replace(/,/g, " ")}</div>
      </button>
    ))}
  </div>
);

MobileGrid.propTypes = {
  onClick: PropTypes.func,
};

export default React.memo(MobileGrid);
