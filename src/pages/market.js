
import React from 'react'
import ProductHighlight from '../components/ProductHighlight'
import ProductRoll from '../components/ProductRoll'

const MarketerPage = () => {

  return (
    <div className="container">
      <div className="section">
      <div className='blogPost__title'>
          {/* <h1>Best Sellers</h1> */}
        </div>
        {/* <ProductHighlight /> */}
        <ProductRoll />
      </div>
    </div>
  )
}

export default MarketerPage
