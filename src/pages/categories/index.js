import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { CATEGORIES } from '../../translation/enum'

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Categories | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h4 className="title is-size-2 is-bold-light">Categories</h4>
            <ul className="taglist catPage__column">
              {group.map((category) => (
                <li key={category.fieldValue}>
                  <Link className="tags__headerText" to={`/categories/${kebabCase(category.fieldValue)}/`}>
                    <h2 className="tags__headerText">
                      {category.totalCount}
                      {CATEGORIES.some((cat) => cat.value === category.fieldValue)
                        ? CATEGORIES.filter((cat) => cat.value === category.fieldValue)[0].label
                        : category.fieldValue
                      }
                    </h2>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default CategoriesPage

export const categoriesPageQuery = graphql`
  query CategoriesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
