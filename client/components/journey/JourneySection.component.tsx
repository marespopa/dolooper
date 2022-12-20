import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import service from '../../services/service'
import Container from '../container'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'
import PlanSection from './plan/PlanSection.component'
import TasksSection from './tasks/TasksSection.component'
import SetTimerSection from './timer/SetTimerSection.component'

const JourneySection = () => {
  const router = useRouter()
  const goToNext = () => {
    router.push('/overview')

    const date = moment().add(time, 'm').toDate()
    service.setDeadline(date.toISOString())
  }

  const maxStep = 2

  const [time, setTime] = useState<number>(30)
  const [step, setStep] = useState<number>(0)

  function handleTimeChange(value: string) {
    const parsedValue = parseInt(value, 10)

    setTime(isNaN(parsedValue) ? 0 : parsedValue)
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

  const nextActionText = step < maxStep ? 'Next' : 'Start Session!'

  return (
    <div className="py-5 text-gray-700">
      <Container>
        {step === 0 && <PlanSection />}
        {step === 1 && <TasksSection />}
        {step === 2 && (
          <SetTimerSection time={time} handleTimeChange={handleTimeChange} />
        )}
        <div className="inline-flex mt-5" role="group">
          <ButtonPrimary
            isDisabled={step === 0}
            action={goToLastStep}
            text="Back"
            style={'mr-4'}
          />
          <ButtonPrimary action={goToNextStep} text={nextActionText} />
        </div>
      </Container>
    </div>
  )
}

export default JourneySection
