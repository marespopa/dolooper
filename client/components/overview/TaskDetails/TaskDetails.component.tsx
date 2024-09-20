import React from 'react'
import DescriptionField from '../DescriptionField'

interface Props {
  isFocused: boolean
}

const TaskDetails = ({ isFocused }: Props) => {
  return (
    <div className="mt-4">
      <DescriptionField isFocused={isFocused} />
    </div>
  )
}

export default TaskDetails
