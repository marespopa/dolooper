import { useRouter } from 'next/router'
import React, { useState } from 'react'
import service from '../../services/service'
import Container from '../container'
import IssueSection from './issue/IssueSection.component'
import TasksSection from './tasks/TasksSection.component'
import EstimationSection from './estimation/EstimationSection'
import { pagePadding } from '../common/common'
import ButtonDark from '../forms/buttons/ButtonDark'
import Alert from '../banners/Alert'
import { SESSION_LENGTH } from 'utils/constants'

const PlanningPage = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const hasError = error.length > 0

  const handleCompletePlanning = async () => {
    const hasDescription = await service.hasDescription()

    if (hasDescription) {
      setError('')
      router.push('/overview')

      service.setTimestamps([])
      service.setEstimation(estimation)

      return
    }

    setError('You need to define your task before starting the work session.')
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
          <ButtonDark
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
