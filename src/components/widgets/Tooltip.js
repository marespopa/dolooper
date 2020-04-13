import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({text}) => {
  return (
    <div className="tooltip">
      <i>i</i>
      <span className="tooltip-text">{text}</span>
    </div>
  )
}

Tooltip.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Tooltip
