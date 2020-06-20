import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import BlogRollIzmir from '../components/BlogRollIzmir'

const IndexPage = () => {

  return (
    <Layout>
      <div className="container">
        <div className="section">
          <BlogRollIzmir />
          <BlogRoll />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
