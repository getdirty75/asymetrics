
import React from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class RadioPage extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return(
      <div className="container">
        <div className="section">
          <div>
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
                      <p className="blogRoll__tags">{post.frontmatter.author}</p>
                      <div className="blogRoll__tagsBox">
                        <Link className="blogRoll__tags" to={`/categories/${post.frontmatter.categories}`}>
                          {post.frontmatter.categories}
                        </Link>
                      </div>
                      <Link to={post.fields.slug}>
                        <p className="blogRoll__itemTitle">{post.frontmatter.title}</p>
                      </Link>
                      <p className="blogRoll__tags">{post.frontmatter.teaser}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )

  }
};

RadioPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query RadioQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { categories: { eq: "radio" } } }
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
    render={(data, count) => <RadioPage data={data} count={count} />}
  />
)







{/* <Layout>
<div className="container">
  <div class="tile is-ancestor section">
    <div class="tile is-vertical is-8">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/822429919&color=%230b5c66&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
          </iframe>
        </article>
      </div>
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box">
            <p className="title about__sectionTitle">!Wide</p>
          </article>
          <article class="tile is-child box">
            <figure class="image is-4by3">
              <img src={back} />
            </figure>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p className="title about__sectionTitle">!Vertical</p>
          </article>
        </div>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p className="title about__sectionTitle">!Inside</p>
      </article>
    </div>
  </div>
</div>
</Layout> */}