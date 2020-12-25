import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import kebabCase from "lodash/kebabCase";

// import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import singlePostStyles from "./singlePost.module.scss";

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      # timeToRead
      tableOfContents(maxDepth: 3)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
        featureImage {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 600, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;


const singlePost = ({ data, pageContext }) => {
  const { prev, next } = pageContext;
  // console.log(data);
  return (
    <>
      <SEO title={data.mdx.frontmatter.title} />
      <Layout>
        <main className={singlePostStyles.mainContent}>
          <h1 className={singlePostStyles.singlePostTitle}>
            {data.mdx.frontmatter.title}
          </h1>
          <div className={singlePostStyles.imgContainer}>
            {data.mdx.frontmatter.featureImage && (
              <Img
                // objectFit="cover"
                // objectPosition="50% 50%"
                fluid={
                  data.mdx.frontmatter.featureImage?.childImageSharp?.fluid
                }
                alt={data.mdx.frontmatter?.title}
              />
            )}
          </div>
          <div className={singlePostStyles.textContainer}>
            <div className={singlePostStyles.textContainerHeader}>
              <p className={singlePostStyles.singlePostDate}>
                {data.mdx.frontmatter.date}
              </p>
              <div className={singlePostStyles.tagsContainer}>
                {data.mdx.frontmatter.tags.map((tagName, index) => {
                  return (
                    <Link
                      key={tagName + index}
                      to={`/tags/${kebabCase(tagName)}`}
                    >
                      <span className={singlePostStyles.tagItem} key={index}>
                        {tagName}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
            {data.mdx.tableOfContents.items && (
              <div className={singlePostStyles.contentTable}>
                <h2>جدول المحتوى</h2>
                <ul>
                  {data.mdx.tableOfContents.items.map((item) => {
                    return (
                      <li key={item.url}>
                        <a href={item.url} key={item.url}>
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            <div className={singlePostStyles.navigatePrevNext}>
              {prev && (
                <Link className={singlePostStyles.prevPostLink} to={`/blog/${prev?.node.frontmatter.slug}`}>
                  <div>
                    السابق: {prev?.node.frontmatter.title}{" "} 
                  </div>
                </Link>
              )}
              {next && (
                <Link className={singlePostStyles.nextPostLink} to={`/blog/${next?.node.frontmatter.slug}`}>
                  <div>
                   التالي: {next?.node.frontmatter.title}
                  </div>
                </Link>
              )}
            </div>
          </div>
        </main>
        {/* <div className="comments">
      <DiscussionEmbed {...disqusConfig} />
      </div> */}
      </Layout>
    </>
  );
};

export default singlePost;
