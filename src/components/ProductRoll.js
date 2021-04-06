import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'

class ProductRoll extends React.Component {

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

        {posts.map(({ node: post }) => (
          <div className="is-parent column is-4 blogRoll__item" key={post.id}>
            <article>
              <a href={post.frontmatter.action} target='_blank'>
                <div className="image is-5by4">
                  <img className="market__img prevent_steal"
                    alt={post.frontmatter.title}
                    src={post.frontmatter.featuredimage && post.frontmatter.featuredimage.childImageSharp.fluid.src}
                  />
                </div>
              </a>
              <div className="market__sub">
                <a href={post.frontmatter.action} target='_blank'>
                  <p className="blogRoll__itemTitle">{post.frontmatter.title}</p>
                  <p className="blogRoll__teaser">{post.frontmatter.description}</p>
                  <p className="blogRoll__teaser">{post.frontmatter.reference}</p>
                </a>

                <div className="blogRoll__tagsBox">
                  {/* <Link className="blogRoll__categories" to={`/blog/categories/${post.frontmatter.categories}`}>
                    {CATEGORIES.some((cat) => cat.value === post.frontmatter.categories)
                      ? CATEGORIES.filter((cat) => cat.value === post.frontmatter.categories)[0].label
                      : post.frontmatter.categories
                    }
                  </Link> */}
                </div>
                <a href={post.frontmatter.action} target='_blank'>
                  <p className="blogRoll__categories">{post.frontmatter.creator}</p>
                </a>
              </div>
            </article>
          </div>
        ))}
        </div>
      </div>
    )
  }
}

ProductRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "product-post" } } }
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
                action
                creator
                description
                overprint
                price
                reference
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
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
    render={(data, count) => <ProductRoll data={data} count={count} />}
  />
)
