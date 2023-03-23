import { useRouter } from 'next/router'
import React, { useState } from 'react'
import service from '../../services/service'
import Container from '../container'
import IssueSection from './issue/IssueSection.component'
import TasksSection from './tasks/TasksSection.component'
import EstimationSection from './estimation/EstimationSection'
import { SESSION_LENGTH } from '@/utils/constants'
import { pagePadding } from '../common/common'
import ButtonDark from '../forms/buttons/ButtonDark'

const PlanningPage = () => {
  const router = useRouter()
  const goToNext = () => {
    router.push('/overview')

    service.setTimestamps([])
    service.setEstimation(estimation)
  }

  const [estimation, setEstimation] = useState<number>(SESSION_LENGTH.default)

  function handleTimeChange(value: string) {
    const parsedValue = parseInt(value, 10)

    setEstimation(isNaN(parsedValue) ? 0 : parsedValue)
  }

  return (
    <div className={`py-5 text-gray-700 ${pagePadding}`}>
      <Container>
        <IssueSection />
        <TasksSection />
        <EstimationSection
          countdownInterval={estimation}
          handleTimeChange={handleTimeChange}
        />
        <div className="inline-flex my-8" role="group">
          <ButtonDark action={goToNext} text={'Complete Planning'} />
        </div>
      </Container>
    </div>
  )
}

export default PlanningPage
