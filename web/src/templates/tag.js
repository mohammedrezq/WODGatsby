import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import tagStyles from "./tag.module.scss";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;
  return (
    <>
      <SEO title={tag} />
      <Layout>
        <div className={tagStyles.tagContainer}>
          <h1>{tagHeader}</h1>
          <ul>
            {edges.map(({ node }) => {
              //   const { slug } = node.fields;
              const { title, slug } = node.frontmatter;
              return (
                <li key={slug}>
                  <Link to={`/blog/${slug}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <div className={tagStyles.allTagsList}>
            <Link to="/tags">&larr;	 All tags</Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
            tags
          }
        }
      }
    }
  }
`;
