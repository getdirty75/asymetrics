import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    console.log(posts)
    const postLinks = posts.map((post) => (
      <li className='is-parent' key={post.node.fields.slug}>
        <article className='media columns'>
          <figure className="media-left">
            <p className="image is-128x128">
              <img
                alt={post.node.frontmatter.title}
                src={post.node.frontmatter.featuredimage.childImageSharp.fluid.src} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <h3>{post.node.frontmatter.title}</h3>
              <p>{post.node.frontmatter.description}</p>
            </div>
          </div>
        </article>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} ${tag} gem${totalCount === 1 ? '' : 's'} to read`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <p className='tags__headerText'>{tagHeader}</p>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Search all categories</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
