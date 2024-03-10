import React from 'react'
import { useRouter } from 'next/router'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'
import Greeting from './greeting/Greeting.component'
import TaskDetails from './TaskDetails'
import TemplateSection from './TemplateSection'
import SectionHeading from './common/SectionHeading.component'

const PlanningSection = () => {
  const router = useRouter()

  const handleCompletePlanning = async () => {
    router.push('/overview')
  }
  const headingContent = {
    title: 'Define the Task',
    description: `What type of task are you trying to accomplish?`,
    subHeading: `Let's start from a template!`,
  }

  return (
    <>
      <Greeting />
      <SectionHeading
        title={headingContent.title}
        description={headingContent.description}
        subHeading={headingContent.subHeading}
      />

      <TemplateSection />

      <TaskDetails />
      <div className="inline-flex my-8" role="button">
        <ButtonPrimary action={handleCompletePlanning}>
          Complete Planning
        </ButtonPrimary>
      </div>
    </>
  )
}

export default PlanningSection
