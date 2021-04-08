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

  // CREDITS TO https://www.cssscript.com/image-zoom-pan-hover-detail-view/
// var addZoom = function (target) {
//   // (A) FETCH CONTAINER + IMAGE
//   var container = document.getElementById(target),
//       imgsrc = container.currentStyle || window.getComputedStyle(container, false),
//       imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, ""),
//       img = new Image();

//   // (B) LOAD IMAGE + ATTACH ZOOM
//   img.src = imgsrc;
//   img.onload = function () {
//     var imgWidth = img.naturalWidth,
//         imgHeight = img.naturalHeight,
//         ratio = imgHeight / imgWidth,
//         percentage = ratio * 100 + '%';

//     // (C) ZOOM ON MOUSE MOVE
//     container.onmousemove = function (e) {
//       var boxWidth = container.clientWidth,
//           rect = e.target.getBoundingClientRect(),
//           xPos = e.clientX - rect.left,
//           yPos = e.clientY - rect.top,
//           xPercent = xPos / (boxWidth / 100) + "%",
//           yPercent = yPos / ((boxWidth * ratio) / 100) + "%";

//       Object.assign(container.style, {
//         backgroundPosition: xPercent + ' ' + yPercent,
//         backgroundSize: imgWidth + 'px'
//       });
//     };

//     // (D) RESET ON MOUSE LEAVE
//     container.onmouseleave = function (e) {
//       Object.assign(container.style, {
//         backgroundPosition: 'center',
//         backgroundSize: 'cover'
//       });
//     };
//   }
// };

// window.addEventListener("load", function(){
//   addZoom("zoom-img");
// });


  return(

    <div className="container section">
      {helmet || ''}
      <div className="tile is-ancestor">

        <div className="tile is-parent is-6 product__imaging">
          <div id="zoom-img" style={{
            width: '400px',
            height: '500px',
            background: `url(${featuredimage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}/>
        </div>

        <div className="tile is-vertical is-6">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <h4 className="product__creator">{creator}</h4>
              <h1 className="product__title">{title}</h1>
              <p className="product__price">{price} €</p>
              <a href={action} target="_blank">
                <button className="button is-warning product__button">Buy</button>
              </a>
              <div className="product__content">
                <p>{reference}</p>
                <p>{description}</p>
              </div>
            </article>
          </div>
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
  price: PropTypes.number,
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
      action={post.frontmatter.action}
      creator={post.frontmatter.creator}
      description={post.frontmatter.description}
      overprint={post.frontmatter.overprint}
      price={post.frontmatter.price}
      reference={post.frontmatter.reference}
      title={post.frontmatter.title}
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
