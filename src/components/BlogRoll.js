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
      <h5>Latest</h5>
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
                <div className="blogRoll__tagsBox">
                  {post.frontmatter.tags.map( (item, index) => (index === 0
                    ? <Link className="blogRoll__tags" to={`tags/${item}`} key={item}>
                      {item}
                    </Link>
                    : <p className="blogRoll__bullet" key={item}>&nbsp;•&nbsp;
                        <span>
                        <Link className="blogRoll__tags" to={`tags/${item}`}>
                          {item}
                        </Link>
                        </span>
                        </p>
                    ))}
                </div>
                <Link className="blogRoll__itemTitle" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <p className="blogRoll__tags">{post.frontmatter.teaser}</p>
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
                insideLinks
                outsideLinks
                tags
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
