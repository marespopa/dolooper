import React from 'react'
import DescriptionField from '../DescriptionField'
import TitleField from '../TitleField'

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
