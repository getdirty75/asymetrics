import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'

export const ProductPostTemplate = ({
  action,
  creator,
  description,
  featuredimage,
  overprint,
  price,
  reference,
  title,
  helmet,
}) => {

  console.log('PROPS')
  console.log(creator)
  console.log(price)

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
              <p className="subtitle">{title}</p>
              <p className="subtitle">{description}</p>
              <div className="content">
                <p className="subtitle">{reference}</p>
                <p className="subtitle">{price}</p>
                <p className="subtitle">{creator}</p>


              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent is-4">
        <article className="tile is-child box">
          <figure className="image is-2by3">
            <img src={featuredimage} />
          </figure>
        </article>
        </div>
      </div>
    </div>
  )
}

ProductPostTemplate.propTypes = {
  action:  PropTypes.string,
  description: PropTypes.string,
  featuredimage: PropTypes.string,
  overprint: PropTypes.string,
  creator: PropTypes.string,
  price: PropTypes.string,
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
        action
        creator
        description
        overprint
        price
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
