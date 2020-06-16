import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  author,
  categories,
  content,
  contentComponent,
  date,
  insideLinks,
  outsideLinks,
  teaser,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  console.log("======================")
  console.log(categories)
  console.log(tags)
  console.log(outsideLinks)
  
  return (
    <section className='blog-post section'>
      {helmet || ''}
      <div className='container content'>
        <div className='blogPost__title'>
          <h1>{title}</h1>
          <p>{teaser}</p>
        </div>
        <div className='columns'>
          <div className='column is-2 blogPost__leftColumn'>
            <p className='blogPost__subKey'>author</p>
            <p className='blogPost__subValue'>{author}</p>
            <p className='blogPost__subKey'>published date</p>
            <p className='blogPost__subValue'>{date}</p>
            <p className='blogPost__subKey'>categories</p>
            <p className='blogPost__subValue'>{categories}</p>
            <p className='blogPost__subKey'>tags</p>
            <p className='blogPost__subValue'>{tags}</p>
            {/*
            <p>tags</p><p>{categories}</p> */}
            {/* {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <ul className='taglist'>
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null} */}
          </div>
          <div className='column is-7 blogPost__centerColumn'>
            <PostContent className='blogPost__text' content={content} />
          </div>
          <div className='column is-3 blogPost__rightColumn'>
            <p className='blogPost__rightKey'>!Dig</p>
            <p className='blogPost__rightValue'>{insideLinks}</p>
            <p className='blogPost__rightKey'>!More</p>
            <p className='blogPost__rightValue'>{outsideLinks}</p>
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
  outsideLinks: PropTypes.string,
  teaser: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        author={post.frontmatter.author}
        categories={post.frontmatter.categories}
        date={post.frontmatter.date}
        content={post.html}
        contentComponent={HTMLContent}
        insideLinks={post.frontmatter.insideLinks}
        outsideLinks={post.frontmatter.outsideLinks}
        teaser={post.frontmatter.teaser}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='teaser'
              content={`${post.frontmatter.teaser}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
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
        date(formatString: "MMMM DD, YYYY")
        insideLinks
        tags
        teaser
        title
      }
    }
  }
`
