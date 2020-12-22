const path = require("path");

module.exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            id
          }
        }
      }
    }
  `);

  // Create paginatied pages for posts
  const postsPerPage = 4

  const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage)

  // console.log("NUMBER OF THE PAGES",numPages)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create single post
  const posts = data.allMdx.edges;
  posts.forEach((edge, index) => {
    // console.log(edge)
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    const title = edge.node.frontmatter.title;
    createPage({
      component: path.resolve("./src/templates/singlePost.js"),
      path: `/blog/${slug}`,
      context: { 
        id: id,
        slug: slug,
        prev: index === 0 ? null : posts[index-1],
        next: index === (posts.length - 1 )? null :  posts[index + 1],
        title,
      },
    });
  });
};
