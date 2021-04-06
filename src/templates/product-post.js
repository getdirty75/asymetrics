import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'

export const ProductPostTemplate = ({
  description,
  featuredimage,
  reference,
  title,
  helmet,
}) => {

  console.log(featuredimage)

  return(
    <div className="container section">
      {helmet || ''}
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box">
                <p className="subtitle">{title}</p>
              </article>
              <article className="tile is-child box">
                <p className="subtitle">{reference}</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="subtitle">Stories / Movies / Books</p>
                <figure className="image is-4by3">
                  <img
                    className="prevent_steal"
                    // src="https://bulma.io/images/placeholders/640x480.png"
                    src={featuredimage}
                  />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">{description}</p>
              <div className="content">

              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className="content">
              <p className="subtitle">Knowledge / Wisdom / Rhythm</p>
              <div className="content"></div>
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-12">
        <article className="tile is-child box">
          <p className="subtitle">Artworks / Pictures / Design</p>
          {/* <div class="content">
          </div> */}
        </article>
      </div>
    </div>
  )
}

ProductPostTemplate.propTypes = {
  description: PropTypes.string,
  reference: PropTypes.string,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ProductPost = ({ data }) => {
  const { markdownRemark: post } = data
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <ProductPostTemplate
      description={post.frontmatter.description}
      reference={post.frontmatter.reference}
      date={post.frontmatter.date}
      contentComponent={HTMLContent}
      featuredimage={post.frontmatter.featuredimage.childImageSharp.fluid.src}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${post.frontmatter.title}`}</title>
          <meta property="og:type" content="product" />
          <meta property="og:title" content={`${post.frontmatter.title}`} />
          <meta property="og:description" content={`${post.frontmatter.description}`} />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content="Asymetrics Magazine" />
          <meta property="og:image" itemprop="image" content={`https://theasymetrics.com${post.frontmatter.featuredimage.childImageSharp.fluid.src}`} />
          <meta name="description" content={`${post.frontmatter.description}`} />
        </Helmet>
      }
      title={post.frontmatter.title}
    />
  )
}

ProductPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProductPost

export const pageQuery = graphql`
  query ProductPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        description
        reference
        date(formatString: "MMMM DD, YYYY")
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
`
