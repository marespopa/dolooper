import React from 'react'
import SectionHeading from '../common/SectionHeading.component'
import DescriptionField from '../DescriptionField'
import TitleField from '../TitleField'

type Props = {
  showHeading?: boolean
}

const TaskDetails = ({ showHeading = true }: Props) => {
  const headingContent = {
    title: 'Define the Task',
    description: `What's your goal for this session?`,
  }

  return (
    <section>
      {showHeading && (
        <SectionHeading
          title={headingContent.title}
          description={headingContent.description}
          subHeading="* You should use markdown for writing the description"
        />
      )}
      <div className="mt-4">
        <TitleField />
      </div>
      <div className="mt-4">
        <DescriptionField />
      </div>
    </section>
  )
}

export default TaskDetails
