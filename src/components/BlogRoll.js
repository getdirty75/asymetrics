import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { CATEGORIES } from '../translation/enum'
// import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <div className="blogRoll
          columns
          is-multiline
          is-three-quarters-mobile
          is-two-thirds-tablet
          is-half-desktop
          is-one-third-widescreen
          is-one-quarter-fullhd"
        >

        {posts && posts.map(({ node: post }) => (
          <div className="is-parent column is-4 blogRoll__item" key={post.id}>
            <article>
              <Link to={`/blog/${post.fields.slug}`}>
                <div className="image is-5by4">
                  <img className="blogRoll__img prevent_steal"
                    alt={post.frontmatter.title}
                    src={post.frontmatter.featuredimage && post.frontmatter.featuredimage.childImageSharp.fluid.src}
                  />
                </div>
              </Link>
              <div className="blogRoll__sub">
                <Link to={`/blog/${post.fields.slug}`}>
                  <p className="blogRoll__itemTitle">{post.frontmatter.title}</p>
                </Link>
                <p className="blogRoll__teaser">{post.frontmatter.teaser}</p>
                <div className="blogRoll__tagsBox">
                  <Link className="blogRoll__categories" to={`/blog/categories/${post.frontmatter.categories}`}>
                    {CATEGORIES.some((cat) => cat.value === post.frontmatter.categories)
                      ? CATEGORIES.filter((cat) => cat.value === post.frontmatter.categories)[0].label
                      : post.frontmatter.categories
                    }
                  </Link>
                </div>
                <p className="blogRoll__author">{post.frontmatter.author}</p>
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
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          sort: { order: DESC, fields: [frontmatter___date] }
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
