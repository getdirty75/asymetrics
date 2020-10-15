const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              categories
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    _.each(posts, (post, index) => {
      const articleId = post.node.id
      createPage({
        categories: post.node.frontmatter.categories,
        component: path.resolve(
          `src/templates/${String(post.node.frontmatter.templateKey)}.js`),
        context: {
          id: articleId,
          next: index === 0 ? null : posts[index - 1].node,
          postPath: `/blog${post.node.fields.slug}`,
          previous: index === posts.length - 1 ? null : posts[index + 1].node,
          slug: post.node.fields.slug,
        },
        path: `/blog${post.node.fields.slug}`,
        tags: post.node.frontmatter.tags,
      })
    })
    let categories = []
    posts.forEach((edge) => {
      if(_.get(edge, `node.frontmatter.categories`)) {
        categories = categories.concat(edge.node.frontmatter.categories);
      }
    })
    categories = _.uniq(categories);
    categories.forEach((category) => {
      const categoryPath = `/blog/categories/${_.kebabCase(category)}/`;
      console.log(category)
      createPage({
        path: categoryPath,
        component: path.resolve(`src/templates/categories.js`),
        context: {
          category,
        }
      });
    });

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/blog/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
