import React from "react";
import Header from "../components/Header"

export default ({children, header}) => (
    <>
        <Header header={header}></Header>
        <main className="center-flex" style={{flexDirection: 'column'}} >{children}</main>
    </>)