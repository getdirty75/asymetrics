import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import './izmir.css';
// import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRollIzmir extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const configuration = {
      figure: 'sizing myshadow c4-izmir colored3 c4-border-right c4-image-pan-left c4-gradient-top',
      figcaption: 'c4-layout-top-right',
      figreveal: 'c4-reveal-left',
    }

    return (
      <div className='izmirRoll'>
      <div className="blogRoll columns is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        {posts && posts.map(({ node: post }) => (
          <div className="is-parent column is-3 blogRoll__item" key={post.id}>

            <Link to={post.fields.slug}>
              <figure className="sizing myshadow colored12 c4-izmir c4-border-cc-2 c4-gradient-bottom-left c4-image-zoom-in">
                <img className="blogRoll__img"
                  alt={post.frontmatter.title}
                  src={post.frontmatter.featuredimage.childImageSharp.fluid.src}
                />
                <figcaption className="c4-layout-top-right">
                  <div className="c4-reveal-left">
                  <p className="blogRoll__title">{post.frontmatter.title}</p>
                  </div>
                </figcaption>
              </figure>
            </Link>

          </div>
          ))}
      </div>
      </div>
    )
  }
}

BlogRollIzmir.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollIzmirQuery {
        allMarkdownRemark(
          limit: 4
          sort: { order: DESC, fields: [frontmatter___categories] }
          filter: { frontmatter: { categories: { eq: "knowledge" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                author
                categories
                tags
                teaser
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRollIzmir data={data} count={count} />}
  />
)
