import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import service from '../../services/service'
import Container from '../container'
import ButtonText from '../forms/buttons/ButtonText'
import PlanSection from './plan/PlanSection.component'
import TasksSection from './tasks/TasksSection.component'
import SetTimerSection from './timer/SetTimerSection.component'

const JourneySection = () => {
  const router = useRouter()
  const goToNext = () => {
    router.push('/overview')

    service.setTimestamps([])
    service.setEstimation(estimation)
  }

  const maxStep = 2

  const [estimation, setEstimation] = useState<number>(30)
  const [step, setStep] = useState<number>(0)

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

  const nextActionText = step < maxStep ? 'Next' : 'Complete Planning'

  return (
    <div className="py-5 text-gray-700">
      <Container>
        {step === 0 && <PlanSection />}
        {step === 1 && <TasksSection />}
        {step === 2 && (
          <SetTimerSection
            countdownInterval={estimation}
            handleTimeChange={handleTimeChange}
          />
        )}
        <div className="inline-flex mt-5" role="group">
          <ButtonText
            isDisabled={step === 0}
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

export default JourneySection
