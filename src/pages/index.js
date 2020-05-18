import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

const IndexPage = () => {

  return (
    <Layout>
      <div className="container">
        <p className="home__desc">The Asymetrics is a collective sharing knowledge about music, & culture from all around the world. <br/>Digging in different subjects through articles, podcasts, mixtapes and more...</p>
        <div className="section">
          <BlogRoll />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
