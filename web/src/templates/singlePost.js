import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import Layout from "../components/Layout";

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        featureImage {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const singlePost = ({ data, pageContext }) => {
  // console.log(pageContext)
  const { prev, next } = pageContext;
  return (
    <Layout>
      <Img fluid={data.mdx.frontmatter.featureImage.childImageSharp.fluid} />
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <div>
        <Link to={prev && `/blog/${prev.node.frontmatter.slug}`}>Previous: {prev && prev.node.frontmatter.title} </Link>
        <Link to={next && `/blog/${next.node.frontmatter.slug}`}>Next: {next && next.node.frontmatter.title}</Link>
      </div>
    </Layout>
  );
};

export default singlePost;
