const path = require("path")

const slugify = title => title.split(" ").join("-")

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    actions.createNodeField({
      node,
      name: "slug",
      value: slugify(node.frontmatter.title),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    actions.createPage({
      path: `/til/${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
