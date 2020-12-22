// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";

// import Layout from "../components/Layout";
// import CardBlog from "../components/CardBlog";
// import BlogPostsContainer from "./blog.module.scss";

//  export const data = graphql`
//       query {
//         allMdx {
//           nodes {
//             frontmatter {
//               title
//               excerpt
//               slug
//               date(formatString: "MMMM DD, YYYY")
//               featureImage {
//                 childImageSharp {
//                   fluid(maxWidth: 600, maxHeight: 600) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `;
// const BlogPage = () => {
//   // console.log(data);
//   // console.log(data);

//   return (
//     <Layout>
//       <div className={BlogPostsContainer.blogsGrid}>
//         {data.allMdx.nodes.map((blogPost, index) => {
//           return (
//             <div
//               className={BlogPostsContainer.blogGridItem}
//               key={blogPost + index}
//             >
//               <CardBlog
//               href={`/blog/${blogPost.frontmatter.slug}`}
//                 title={blogPost.frontmatter.title}
//                 excerpt={blogPost.frontmatter.excerpt}
//                 featureImage={
//                   blogPost.frontmatter.featureImage.childImageSharp.fluid
//                 }
//                 date={blogPost.frontmatter.date}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// };

// export default BlogPage;
