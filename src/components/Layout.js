import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Transition from '../components/Transition'
import './all.sass'
import Footer from './Footer'

import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children, location }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="" />
        <meta name="Language" CONTENT="en" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charset="utf-8" />
        <meta name="robots" content="index,follow" />
        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16"/>
        <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="fb:app_id" content="734424210440510" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://theasymetrics.com/" />
        <meta property="og:site_name" content="Asymetrics Magazine" />
        <meta property="og:image" itemprop="image" content="https://theasymetrics.com/logo_256.png" />
      </Helmet>
      <Navbar />
      <Transition location={location}>
        <div>{children}</div>
        <Footer className='footer__stickyBottom'/>
      </Transition>
    </div>
  )
}

export default TemplateWrapper
