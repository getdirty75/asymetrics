import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blog-roll columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-4" key={post.id}> 
              <img className="blog-roll-img"
                alt={post.frontmatter.title}
                src={post.frontmatter.featuredimage.childImageSharp.fluid.src} 
              />
              <article className="blog-list-item">
                <div className="blog-roll-sub">
                  <div className="tagged">
                    {post.frontmatter.tags.map( (item, index) => (
                      <Link className="blog-roll-tags" to={item} key={item}>
                        {index === 0 ? item : <p className="bullet">&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;<span className="blog-roll-tags">{item}</span></p> }  
                      </Link>
                    ))}
                  </div>
                  <Link
                    className="blog-roll-item-title title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <p className="blog-roll-tags ">{post.frontmatter.description}</p>
                    
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
