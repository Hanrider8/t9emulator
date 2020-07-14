import React from "react";
import styles from "./Pagination.module.css";
import PropTypes from "prop-types";

const Pagination = ({ changePage, pages, page }) => (
  <div className={styles.container}>
    {page > 1 && <span onClick={() => changePage(page - 1)}>Back</span>}
    <div>{`${page}  /  ${pages}`}</div>
    {page < pages && <span onClick={() => changePage(page + 1)}>Next</span>}
  </div>
);

Pagination.propTypes = {
  changePage: PropTypes.func,
  pages: PropTypes.number,
  page: PropTypes.number,
};

export default React.memo(Pagination);
