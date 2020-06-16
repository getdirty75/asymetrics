import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <div>
      <p>BABYLON IS WATCHING YOU</p>
      <BlogPostTemplate
        author={entry.getIn(['data', 'author'])}
        categories={entry.getIn(['data', 'categories'])}
        content={widgetFor('body')}
        // date={entry.getIn(['data', 'date(formatString: "MMMM DD, YYYY")'])}
        insideLinks={entry.getIn(['data', 'insideLinks'])}
        outsideLinks={entry.getIn(['data', 'outsideLinks'])}
        tags={tags && tags.toJS()}
        teaser={entry.getIn(['data', 'teaser'])}
        title={entry.getIn(['data', 'title'])}
      />
    </div>
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
