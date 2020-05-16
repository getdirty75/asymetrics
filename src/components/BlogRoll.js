import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blog-roll columns is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-4 blogRoll__item" key={post.id}>
            {/* <Link to={post.fields.slug}>
            <img className="blog-roll-img"
                alt={post.frontmatter.title}
                src={post.frontmatter.featuredimage.childImageSharp.fluid.src}
              />
            </Link> */}
              <article className="blog-list-item">
              <figure class="image is-2by3">
              <img className="blog-roll-img"
                alt={post.frontmatter.title}
                src={post.frontmatter.featuredimage.childImageSharp.fluid.src}
              />
              </figure>
                <div className="blog-roll-sub">
                  <div className="tagged">
                    {post.frontmatter.tags.map( (item, index) => (index === 0
                      ? <Link className="blog-roll-tags" to={`tags/${item}`} key={item}>
                        {item}
                      </Link>
                      : <p className="bullet" key={item}>&nbsp;•&nbsp;
                          <span>
                          <Link className="blog-roll-tags" to={`tags/${item}`}>
                            {item}
                          </Link>
                          </span>
                          </p>
                      ))}
                  </div>
                  <Link
                    className="blog-roll-item-title title is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <p className="blog-roll-tags">{post.frontmatter.description}</p>
                </div>
                <p>
                  <br />
                  <br />
                  {/* <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link> */}
                </p>
              </article>
            </div>
          ))}
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
                description
                tags
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
