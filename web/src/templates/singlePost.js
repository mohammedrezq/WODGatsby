import React from "react";
import { graphql } from "gatsby";
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
            fluid(maxWidth: 1500, maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const singlePost = (props) => {
  return (
    <Layout>
      <Img
        fluid={props.data.mdx.frontmatter.featureImage.childImageSharp.fluid}
      />
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <p>{props.data.mdx.frontmatter.date}</p>
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default singlePost;
