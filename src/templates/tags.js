import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import '../components/izmir.css';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <div className="is-parent column is-3 blogRoll__item" key={post.id}>
        <article>
          <Link to={post.node.fields.slug}>
            <p className="blogRoll__itemTitle">{post.node.frontmatter.title}</p>
          </Link>
          <Link to={post.node.fields.slug}>
            <div className="image is-5by4">
              <img className="blogRoll__img"
                alt={post.node.frontmatter.title}
                src={post.node.frontmatter.featuredimage.childImageSharp.fluid.src}
              />
            </div>
          </Link>
          <Link to={post.node.fields.slug}>
            <div className="blogRoll__sub">
              <p className="blogRoll__tags">{post.node.frontmatter.teaser}</p>
              <p className="blogRoll__tags">{post.node.frontmatter.author}</p>
            </div>
          </Link>
        </article>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} article${totalCount === 1 ? '' : 's'} under ${tag} tag`

    return (
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h2 className='tags__headerText'>{tagHeader}</h2>
              <p><Link className='tags__headerText' to="/tags/">Search all tags</Link></p>
              <div className='blogRoll columns'>{postLinks}</div>
            </div>
          </div>
        </div>
      </section>
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
      limit: 4
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
            author
            title
            teaser
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
