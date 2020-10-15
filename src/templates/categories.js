
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { CATEGORIES } from '../translation/enum'

class CategoryRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (

      <Link to={`/blog/${post.node.fields.slug}`}>
        <div className="tile is-12 is-parent"  key={post.id}>
          <div className="tile is-child">


              <article className="horizontalRoll__fundamental media columns">

                <div class="column columns">
                  <figure className="image is-128x128 media-left antifigure">
                    <img
                      alt={post.node.frontmatter.title}
                      className="horizontalRoll__img"
                      src={post.node.frontmatter.featuredimage.childImageSharp.fluid.src}
                    />
                  </figure>
                </div>

                <div class="column is-10 columns">
                  <div className="media-content">
                    <div className="content">
                      <div className="horizontalRoll__pres is-hidden-mobile">
                        <p className="horizontalRoll__date"><small>{post.node.frontmatter.date}</small>&nbsp;</p>
                        <p className="horizontalRoll__author">&nbsp;@{post.node.frontmatter.author}</p>
                      </div>
                      <div className="horizontalRoll__pres is-hidden-mobile">
                        <p className="horizontalRoll__teaser">{post.node.frontmatter.teaser}</p>
                      </div>
                      <div className="horizontalRoll__pres">
                        <p className="horizontalRoll__title">{post.node.frontmatter.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="column">Auto</div> */}
                {/* <nav className="level is-mobile">
                    <div className="level-right">
                      <a className="level-item">
                        <span className="horizontalRoll__tags">{post.node.frontmatter.tags}</span>
                      </a>
                    </div>
                  </nav> */}
                {/* <button className="horizontalRoll__icon delete"></button> */}
                {/* <nav className=" is-mobile">
                    <div className="level-left horizontalRoll__share">
                      <a className="level-item">
                        <span className="icon is-small"><i className="horizontalRoll__icon fas fa-reply"></i></span>
                      </a>
                      <a className="level-item">
                        <span className="icon is-small"><i className="horizontalRoll__icon fas fa-retweet"></i></span>
                      </a>
                      <a className="level-item">
                        <span className="icon is-small"><i className="horizontalRoll__icon fas fa-heart"></i></span>
                      </a>
                    </div>
                  </nav> */}
                {/* <div className="media-right"></div> */}

              </article>
          </div>
        </div>
        </Link>

    ))
    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const categoryHeader = `${totalCount} ${CATEGORIES.some((cat) => cat.value === category)
      ? CATEGORIES.filter((cat) => cat.value === category)[0].label
      : category
    }`

    return (
      <section className="section">
        <Helmet title={`${category} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h2 className='category__display'>{categoryHeader}</h2>
              <p><Link className='category__display' to="/categories/">Search all categories</Link></p>
              <div className="container">
                <div className="horizontalRoll__box tile is-ancestor">
                  {postLinks}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CategoryRoute

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            tags
            teaser
            title
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
`