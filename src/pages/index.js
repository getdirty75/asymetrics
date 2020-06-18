import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

const IndexPage = () => {

  return (
    <Layout>
      <div className="container">
        <p className="home__desc">
        ALWAYS ODD NEVER ALIGNED
        </p>
        <div className="section">
          <BlogRoll />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
