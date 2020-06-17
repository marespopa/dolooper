import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown';

const TaskSection = ({ label, content }) => {
  return (
    <div className="task__section">
      <h3>{label}</h3>
      <ReactMarkdown className="markdown-container" source={content} />
    </div>
  )
}

TaskSection.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string,
}

export default TaskSection
