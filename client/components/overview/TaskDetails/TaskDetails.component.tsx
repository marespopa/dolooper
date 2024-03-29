import React from 'react'
import TitleField from '../TitleField'
import DescriptionField from '../DescriptionField'

const TaskDetails = () => {
  return (
    <>
      <div className="mt-4">
        <TitleField />
      </div>
      <div className="mt-4">
        <DescriptionField />
      </div>
    </>
  )
}

export default TaskDetails
