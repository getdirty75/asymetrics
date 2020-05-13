import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      // <figure className="image is-2by3">
      //   <img alt={alt} fluid={image.childImageSharp.fluid} />
      // </figure>
       <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    // return (
    //   <figure className="image is-2by3">
    //     <img alt={alt} fluid={image.childImageSharp.fluid} />
    //   </figure>
    // )
     return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string') {
    // return (
    //   <figure className="image is-2by3">
    //     <img alt={alt} src={image} />
    //   </figure>
    // )
     return <img style={imageStyle} src={image} alt={alt} />
  }
  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
