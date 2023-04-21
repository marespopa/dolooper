import { useRouter } from 'next/router'
import React, { useState } from 'react'
import service from '../../services/service'
import Container from '../container'
import IssueSection from './issue/IssueSection.component'
import TasksSection from './tasks/TasksSection.component'
import EstimationSection from './estimation/EstimationSection'
import { pagePadding } from '../common/common'
import ButtonSecondary from '../forms/buttons/ButtonSecondary'
import Alert from '../banners/Alert'
import { ESTIMATION_CONFIG } from 'utils/constants'
import Greeting from './greeting/Greeting.component'

const PlanningPage = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const hasError = error.length > 0

  const handleCompletePlanning = async () => {
    const hasDescription = await service.hasDescription()

    if (hasDescription) {
      setError('')
      router.push('/overview')

      service.setEstimation(estimation)

      return
    }

    setError('You need to define your task before starting the work session.')
  }

  const [estimation, setEstimation] = useState<number>(
    ESTIMATION_CONFIG.default,
  )

  function handleTimeChange(value: string) {
    const parsedValue = parseInt(value, 10)

    setEstimation(isNaN(parsedValue) ? 0 : parsedValue)
  }

  return (
    <div className={`py-5 ${pagePadding}`}>
      <Container>
        <Greeting />
        <IssueSection />
        <TasksSection />
        <EstimationSection
          countdownInterval={estimation}
          handleTimeChange={handleTimeChange}
        />
        <div className="inline-flex my-8" role="group">
          <ButtonSecondary
            action={handleCompletePlanning}
            text={'Complete Planning'}
          />
        </div>
        {hasError && (
          <div className="-mt-8 mb-2">
            <Alert style="error">{error}</Alert>
          </div>
        )}
      </Container>
    </div>
  )
}

export default PlanningPage
