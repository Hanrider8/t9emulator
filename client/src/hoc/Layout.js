import React from "react";
import Header from "../components/Header";
import PropTypes from "prop-types";

const Layout = ({ children, header }) => (
  <>
    <Header header={header}></Header>
    <main className="center-flex" style={{ flexDirection: "column" }}>
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
};

export default Layout;
