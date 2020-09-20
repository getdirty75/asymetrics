import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import { Helmet } from 'react-helmet'

const IndexPage = () => {

  return (
    <Layout>
      <div className="container">
        <div className="section">
          <BlogRoll />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
