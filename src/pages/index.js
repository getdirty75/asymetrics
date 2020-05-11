import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

const IndexPage = () => {

  return (
    <Layout>
      <div className="section">
        <BlogRoll />
      </div>
    </Layout>
  )
}

export default IndexPage
