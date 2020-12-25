import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import CardBlog from "../components/CardBlog";
import AllPostsStyles from "./allPosts.module.scss";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";

const allPosts = ({ pageContext, data }) => {
  // console.log(data)
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/blog/" : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/${currentPage + 1}`;

  const posts = data.allMdx.edges;
  console.log(posts);

  return (
    <>
    <SEO title="المدونة" />
    <Layout>
      <div className={AllPostsStyles.blogsGrid}>
        {posts.map((blogPost, index) => {
          return (
            <div key={blogPost + index}>
              <CardBlog
                href={`/blog/${blogPost.node.frontmatter.slug}`}
                title={blogPost.node.frontmatter.title}
                excerpt={blogPost.node.frontmatter?.excerpt}
                featureImage={
                  blogPost.node.frontmatter.featureImage?.childImageSharp?.fluid
                }
                date={blogPost.node.frontmatter?.date}
              />
            </div>
          );
        })}
      </div>
      <Pagination isFirst={isFirst} isLast={isLast} prevPage={prevPage} nextPage={nextPage} />
    </Layout>
    </>
  );
};

export default allPosts;

export const pageQuery = graphql`
  query allPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            excerpt
            title
            date(formatString: "MMMM DD, YYYY")
            featureImage {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 600 ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
