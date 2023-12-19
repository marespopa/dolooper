import { useRouter } from 'next/router'
import React from 'react'
import Container from '../container'
import IssueSection from './issue/IssueSection.component'
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
        <IssueSection />
        <div className={`flex my-8'}`} role="group">
          <TasksSection />
        </div>

        <div className="inline-flex my-8" role="group">
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
