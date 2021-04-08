import React from 'react'
import PropTypes from 'prop-types'
import { ProductPostTemplate } from '../../templates/product-post'

const ProductPostPreview = ({ entry }) => {

  return (
    <div>
      <p>Product page - asymetrics</p>
      <ProductPostTemplate
        action={entry.getIn(['data', 'action'])}
        creator={entry.getIn(['data', 'creator'])}
        description={entry.getIn(['data', 'description'])}
        featuredimage={entry.getIn(['data', 'featuredimage'])}
        overprint={entry.getIn(['data', 'overprint'])}
        price={entry.getIn(['data', 'price'])}
        reference={entry.getIn(['data', 'reference'])}
        title={entry.getIn(['data', 'title'])}
      />
    </div>
  )
}

ProductPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ProductPostPreview
