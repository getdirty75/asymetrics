import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import { CATEGORIES } from '../translation/enum'

export const BlogPostTemplate = ({
  author,
  categories,
  content,
  contentComponent,
  date,
  outsideLinks,
  teaser,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  if (typeof document !== 'undefined') {
    let links = document.getElementsByTagName('a');
      for (var i=0, len=links.length; i < len; i++) {
        let href = links[i].href.split('/')
        if (href[2] !== 'theasymetrics.com'){
          links[i].target = '_blank';
        }
      }
    let images = document.getElementsByTagName('img');
    console.log("===========")
    console.log(images)
    for (var y=0, l=images.length; y < l; y++) {
      images[y].className = " prevent_steal";
    }
  }

    return (
    <section className='blog-post section'>
      {helmet || ''}
      <div className='container content'>
        <div className='blogPost__title'>
          <h1>{title}</h1>
          <p className="blogPost__teaser">{teaser}</p>
        </div>
        <div className='columns'>
          <div className='column is-2 blogPost__leftColumn'>
            <div className='blogPost__subValue tags'>
              {tags?.map(
                (item) =>
                (<Link className="tag is-dark" key={item} to={`/blog/tags/${item.replace(/_| |&/g,'-').replace('#', '').toLowerCase()}`}>
                {item}
              </Link>)
              )}
            </div>
            <div className='blogPost__subKey'>
              <p className='blogPost__subAuthor'>{author},&nbsp;</p>
              <p className='blogPost__subDate'>{date}&nbsp;</p>
              <Link className="blogPost__subCat" to={`/blog/categories/${categories}`}>
                {CATEGORIES.some((cat) => cat.value === categories)
                  ? CATEGORIES.filter((cat) => cat.value === categories)[0].label
                  : categories
                }
              </Link>
            </div>
          </div>
          <div className='column is-8 blogPost__centerColumn'>
            <PostContent className='blogPost__text' content={content} />
          </div>
          <div className='column is-2 blogPost__rightColumn'>
            <p className='blogPost__rightKey'>Related</p>
            {outsideLinks?.outsideLinksList?.map((item, index) => (
               <a className='blogPost__rightValue'
                href={item.link}
                rel="noopener noreferrer"
                target={
                  item.link.split('/')[2] !== 'theasymetrics.com' ? "_blank" : ""
                }
                key={index}>{item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  author: PropTypes.string,
  categories: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  insideLinks: PropTypes.string,
  outsideLinks: PropTypes.object,
  teaser: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const url = typeof window !== 'undefined' ? window.location.href : '';
  console.log(url)

  return (
    <BlogPostTemplate
      author={post.frontmatter.author}
      categories={post.frontmatter.categories}
      date={post.frontmatter.date}
      content={post.html}
      contentComponent={HTMLContent}
      featuredimage={post.frontmatter.featuredimage.childImageSharp.fluid.src}
      insideLinks={post.frontmatter.insideLinks}
      outsideLinks={post.frontmatter.outsideLinks}
      teaser={post.frontmatter.teaser}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${post.frontmatter.title}`}</title>
          <meta property="og:type" content="article" />
          <meta property="og:title" content={`${post.frontmatter.title}`} />
          <meta property="og:description" content={`${post.frontmatter.teaser}`} />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content="Asymetrics Magazine" />
          <meta property="og:image" itemprop="image" content={`https://theasymetrics.com${post.frontmatter.featuredimage.childImageSharp.fluid.src}`} />
          <meta name="description" content={`${post.frontmatter.teaser}`} />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        author
        categories
        date(formatString: "MMMM DD, YYYY")
        tags
        teaser
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        outsideLinks {
          outsideLinksList {
            link
            text
          }
        }
      }
    }
  }
`
