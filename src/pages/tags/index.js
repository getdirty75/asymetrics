
import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <section className="section">
    <Helmet title={`Tags | ${title}`} />
    <div className="container content">
      <div className="columns">
        <div
          className="column is-10 is-offset-1"
          style={{ marginBottom: '6rem' }}
        >
          <h4 className="title is-size-2 is-bold-light">Tags</h4>
          <ul className="taglist">
            {group.map((tag) => (
              <li key={tag.fieldValue}>
                <Link className="category__display" to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
                  <h2 className="category__display">{tag.fieldValue} ({tag.totalCount})</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default TagsPage

export const tagsPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
