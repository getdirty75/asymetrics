import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

const IndexPage = () => {

  return (
    <Layout>
      <div className="container">
        <p className="home__desc">Creative Collective sharing stories about musics, life around the planet. Digging subjects through articles, podacasts, mixes and any others alternatives medium that will be create in the future.</p>
        <div className="section">
          <BlogRoll />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
