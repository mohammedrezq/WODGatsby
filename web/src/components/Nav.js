import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import NavStyles from "./Nav.module.scss";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <nav>
      <div>
        <div className={NavStyles.logo}>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
      </div>
      <div className={NavStyles.linkList}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
