import React from 'react'
import PropTypes from 'prop-types'

const Tags = ({ tags }) => {
  // Convert to array if we have only one tag
  let tagsAsArray =
    tags.length > 0 ? (tags.indexOf(',') === -1 ? [tags] : tags.split(',')) : []

  let formattedTags = tagsAsArray.map((tag, index) => (
    <span className="tag" key={index}>
      {tag}
    </span>
  ))

  return tagsAsArray.length > 0 && <div className="tags">{formattedTags}</div>
}

Tags.propTypes = {
  tags: PropTypes.string,
}

export default Tags
