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

  const [time, setTime] = useState<number>(30)

  function handleTimeChange(value: string) {
    const parsedValue = parseInt(value, 10)

    setTime(isNaN(parsedValue) ? 0 : parsedValue)
  }

  return (
    <section className="py-5 bg-indigo-500">
      <Container>
        <div className="text-white w-full ">
          <h2 className="text-3xl font-bold mt-3 mb-3">{`Let's start!`}</h2>
          <p className="my-5 mx-auto text-xl">Plan. Focus. Execute.</p>
        </div>
        <div className="flex w-full bg-gray-100 px-3 py-5 rounded-md">
          <div className="flex-auto w-1/3 pr-16">
            <h2 className="text-xl font-bold mt-3 mb-3">
              {`What's your plan for this coding session?`}
            </h2>
            <p className="my-5 mx-auto text-sm text-gray-600">
              Start by <span className="font-bold">clearly</span> describing
              what you n are trying to accomplish
            </p>
            <p className="my-5 mx-auto text-sm text-gray-600">
              {`1. What's your plan for this coding session? eg. Having a working menu, with right aligned links and left aligned logo.`}
            </p>
            <p className="my-5 mx-auto text-sm text-gray-600">
              {`2. What are the tasks that need to be done, so we can call this a success:`}
            </p>
            <ul className="list-disc my-1 mx-auto text-sm text-gray-600 pl-5">
              <li>Create a GlobalNavigation component</li>
              <li>Implement Logo aligned on the right side.</li>
              <li>
                Implement right aligned menu links, which transform into a
                toggle icon on mobile/tablet resolutions (under 756px)
              </li>
              <li>Add Unit tests</li>
            </ul>
            <p className="my-5 mx-auto text-sm text-gray-600">
              {`3. Having this layed out, how long will your coding session will last?`}
            </p>
            <p className="my-5 mx-auto text-sm text-gray-600">
              4. Start executing. A timer is shown, with the tasks in view
              (checkboxes for them).
            </p>
          </div>
          <div className="flex-auto w-2/3 bg-white shadow-sm rounded px-8 pt-6 pb-8 -mt-16 border border-gray-50">
            <PlanSection />
            <TasksSection />
            <SetTimerSection time={time} handleTimeChange={handleTimeChange} />
            <ButtonPrimary action={goToNext} text={'Start Session'} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default JourneySection
