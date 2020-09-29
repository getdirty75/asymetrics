import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../components/izmir.css';
import { CATEGORIES } from '../translation/enum'

class CategoryRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <div className="is-parent column is-3 blogRoll__item" key={post.id}>
        <article>
          <Link to={post.node.fields.slug}>
            <p className="blogRoll__itemTitle2">{post.node.frontmatter.title}</p>
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
    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    // const categoryHeader = `${totalCount} asymetric's stor${totalCount === 1 ? 'y' : 'ies'} for '${CATEGORIES.filter((cat) => cat.value === category)[0].label}' category`
    const categoryHeader = `${totalCount} ${CATEGORIES.some((cat) => cat.value === category)
      ? CATEGORIES.filter((cat) => cat.value === category)[0].label
      : category
    }`
    return (
      <Layout>
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
                  <div className="section">
                    <div className='blogRoll columns is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>{postLinks}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
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
