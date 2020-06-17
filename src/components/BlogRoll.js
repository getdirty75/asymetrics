import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
      <h1 className='bogRoll__mainTitle'></h1>
      <div className="blogRoll columns is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">

        {posts && posts.map(({ node: post }) => (
          <div className="is-parent column is-4 blogRoll__item" key={post.id}>
            <article>
              <Link to={post.fields.slug}>
                <figure className="image is-5by4">
                <img className="blogRoll__img"
                  alt={post.frontmatter.title}
                  src={post.frontmatter.featuredimage.childImageSharp.fluid.src}
                />
                </figure>
              </Link>
              <div className="blogRoll__sub">
                <p className="blogRoll__tags">{post.frontmatter.author}</p>
                <div className="blogRoll__tagsBox">
                  <Link className="blogRoll__tags" to={`/categories/${post.frontmatter.categories}`}>
                    {post.frontmatter.categories}
                  </Link>
                </div>
                <Link className="blogRoll__itemTitle" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <p className="blogRoll__tags">{post.frontmatter.teaser}</p>
              </div>
            </article>
          </div>
          ))}
      </div>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                author
                categories
                teaser
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
