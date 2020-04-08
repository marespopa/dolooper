import React from 'react'
import PropTypes from 'prop-types'

const TaskSection = ({ label, content }) => {
  const Content = <p className="long-text">{content}</p>
  return (
    <div className="task__section">
      <h3>{label}</h3>
      {Content}
    </div>
  )
}

TaskSection.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string,
}

export default TaskSection
