
import React from 'react'
import BlogRoll from '../components/BlogRoll'
import HighLight from '../components/HighLight'

const IndexPage = () => {

  return (
    <div className="container">
      <div className="section">
        {/* <p className="structured__top">M0ST READ THIS WEEK</p> */}
        <HighLight />
        {/* <p className="structured__top2">M0RE ST0RIES T0 READ</p> */}
        <BlogRoll />
      </div>
    </div>
  )
}

export default IndexPage
