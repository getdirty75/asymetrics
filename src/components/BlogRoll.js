import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
mixItUp = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // this.mixItUp(posts);

    return (
      <div className='izmirRoll'>
        <div className="blogRoll
          columns
          is-multiline
          is-three-quarters-mobile
          is-two-thirds-tablet
          is-half-desktop
          is-one-third-widescreen
          is-one-quarter-fullhd"
        >

        {posts && posts.map(({ node: post }) => (
          <div className="is-parent column is-4 blogRoll__item" key={post.id}>
            <article>
              <Link to={post.fields.slug}>
                <div className="image is-5by4">
                  <img className="blogRoll__img"
                    alt={post.frontmatter.title}
                    src={post.frontmatter.featuredimage.childImageSharp.fluid.src}
                  />
                </div>
              </Link>
              <div className="blogRoll__sub">
                <Link to={post.fields.slug}>
                  <p className="blogRoll__itemTitle">{post.frontmatter.title}</p>
                </Link>
                <p className="blogRoll__tags">{post.frontmatter.teaser}</p>
                
                <div className="blogRoll__tagsBox">
                  <Link className="blogRoll__categories" to={`/categories/${post.frontmatter.categories}`}>
                    {post.frontmatter.categories}
                  </Link>
                </div>
                <p className="blogRoll__tags">{post.frontmatter.author}</p>
              </div>
            </article>
          </div>
        ))}
        </div>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
