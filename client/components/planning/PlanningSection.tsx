import React from 'react'
import { useRouter } from 'next/router'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'
import Greeting from './greeting/Greeting.component'
import TaskDetails from './TaskDetails'

const PlanningSection = () => {
  const router = useRouter()

  const handleCompletePlanning = async () => {
    router.push('/overview')
  }

  return (
    <>
      <Greeting />
      <TaskDetails showHeading={true} />
      <div className="inline-flex my-8" role="button">
        <ButtonPrimary action={handleCompletePlanning}>
          Complete Planning
        </ButtonPrimary>
      </div>
    </>
  )
}

export default PlanningSection
