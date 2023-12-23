import { useRouter } from 'next/router'
import React from 'react'
import Container from '../container'
import DescriptionSection from './description/DescriptionSection.component'
import TasksSection from './tasks/TasksSection.component'
import { pagePadding } from '../common/common'
import Greeting from './greeting/Greeting.component'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'

const PlanningPage = () => {
  const router = useRouter()

  const handleCompletePlanning = async () => {
    router.push('/overview')
  }

  return (
    <div className={`py-5 ${pagePadding}`}>
      <Container>
        <Greeting />
        <DescriptionSection />
        <div className={`flex my-8'}`} role="group">
          <TasksSection />
        </div>

        <div className="inline-flex my-8" role="button">
          <ButtonPrimary
            action={handleCompletePlanning}
            text={'Complete Planning'}
          />
        </div>
      </Container>
    </div>
  )
}

export default PlanningPage
