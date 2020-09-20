import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import { Helmet } from 'react-helmet'

const IndexPage = () => {

  return (
    <Layout>
      <Helmet>
        <meta property="og:image" itemprop="image" content="https://theasymetrics.com/logo_256.png" />
      </Helmet>
      <div className="container">
        <div className="section">
          <BlogRoll />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
