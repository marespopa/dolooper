import { useRouter } from 'next/router'
import React, { useState } from 'react'
import service from '../../services/service'
import Container from '../container'
import ButtonText from '../forms/buttons/ButtonText'
import IssueSection from './issue/IssueSection.component'
import TasksSection from './tasks/TasksSection.component'
import EstimationSection from './estimation/EstimationSection'
import { SESSION_LENGTH } from '../../utils/constants'
import { pagePadding } from '../common/common'

const PlanningPage = () => {
  const router = useRouter()
  const goToNext = () => {
    router.push('/overview')

    service.setTimestamps([])
    service.setEstimation(estimation)
  }

  const maxStep = 3

  const [estimation, setEstimation] = useState<number>(SESSION_LENGTH.default)
  const [step, setStep] = useState<number>(1)

  function handleTimeChange(value: string) {
    const parsedValue = parseInt(value, 10)

    setEstimation(isNaN(parsedValue) ? 0 : parsedValue)
  }

  function goToNextStep() {
    const nextStep = step + 1

    if (nextStep > maxStep) {
      return goToNext()
    }

    setStep(nextStep)
  }

  function goToLastStep() {
    const lastStep = step - 1

    setStep(lastStep)
  }

  const nextActionText = step < maxStep + 1 ? 'Next' : 'Complete Planning'

  return (
    <div className={`py-5 text-gray-700 ${pagePadding}`}>
      <Container>
        <h2>{`Step ${step}/${maxStep}`}</h2>
        {step === 1 && <IssueSection />}
        {step === 2 && <TasksSection />}
        {step === 3 && (
          <EstimationSection
            countdownInterval={estimation}
            handleTimeChange={handleTimeChange}
          />
        )}
        <div className="inline-flex mt-5" role="group">
          <ButtonText
            isDisabled={step === 1}
            action={goToLastStep}
            text="Back"
            style={'mr-4'}
          />
          <ButtonText action={goToNextStep} text={nextActionText} />
        </div>
      </Container>
    </div>
  )
}

export default PlanningPage
