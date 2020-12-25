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
      allMdx(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <>
      {/* <footer className={props.className}>
        <div className={footerStyles.wodFooter}>
          <h2>Latest Blogs</h2>
          <ul>
            {data.allMdx.edges.map((blogpost, i) => {
              return (
                <li key={i}>
                  <Link to={`/blog/${blogpost.node.frontmatter.slug}`}>
                    {blogpost.node.frontmatter.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </footer> */}
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
