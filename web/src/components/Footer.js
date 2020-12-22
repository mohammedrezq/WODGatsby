import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import footerStyles from "./Footer.module.scss";

const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <>
      <footer className={props.className}>
        <div className={footerStyles.wodFooter}>Footer Content</div>
      </footer>
      <div className={footerStyles.wodSubFooter}>
        &copy; {data.site.siteMetadata.title} {new Date().getFullYear()} By:{" "}
        <a
          className={footerStyles.footerLink}
          href="https://www.twitter.com/mohammedrezq2"
        >
          {data.site.siteMetadata.author}
        </a>
      </div>
    </>
  );
};

export default Footer;
