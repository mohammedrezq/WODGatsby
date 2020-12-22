import React from "react";
import "normalize.css";

import Header from "./Header";
import Footer from "./Footer";

import LayoutStyles from "./Layout.module.scss";
import "../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <div className={LayoutStyles.pageContainer}>
      <div className={LayoutStyles.contentContainer}>
        <Header />
        {children}
      </div>
      <Footer className={LayoutStyles.Footer} />
    </div>
  );
};

export default Layout;
