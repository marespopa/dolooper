import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import service from '../../services/service'
import { Task } from '../../types/types'
import Container from '../container/Container.component'
import Input from '../forms/input/Input.component'
import TasksList from '../journey/tasks/TasksList'
import Timer from './timer'

const OverviewSection = () => {
  const [plan, setPlan] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [deadline, setDeadline] = useState<string>('')
  const [notes, setNotes] = useState('')
  const router = useRouter()

  useEffect(() => {
    service.getPlan().then((results) => {
      if (!results) {
        return
      }

      setPlan(results)
    })
  }, [])

  useEffect(() => {
    service.getDeadline().then((results) => {
      if (!results) {
        return
      }

      setDeadline(results)
      setIsLoading(false)
    })
  }, [])

  function handleNotesChange(value: string) {
    setNotes(value)
  }

  function handleTimeAdd(timeLeft: number) {
    const newDeadline = timeLeft < 0 ? moment() : moment(deadline)

    newDeadline.add(15, 'm').toDate()
    setDeadline(newDeadline.toISOString())
    service.setDeadline(newDeadline.toISOString())
  }

  /**
  function handleTimeDecrease() {
    const newDeadline = moment().add(0.1, 'm').toDate()
    setDeadline(newDeadline.toISOString())
    service.setDeadline(newDeadline.toISOString())
  }
 */
  function handleReset() {
    service.resetAll()
    router.push('/journey')
  }

  return (
    <Container>
      <section>
        {/* for testing only <button onClick={handleTimeDecrease}>Remove time</button>*/}
        {!isLoading && (
          <Timer deadline={deadline} handleTimeAdd={handleTimeAdd} />
        )}
        <div className="flex my-9">
          <div className="flex-auto mr-3 px-2 py-3 bg-white">
            <h2 className="font-bold mt-0 mb-3">Plan</h2>
            <p>{plan}</p>
          </div>
          <TasksList area="overview" />
        </div>
        <div className="mt-9 mb-4">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block font-bold mt-0 mb-3"
          >
            Notes
          </label>
          <Input
            id="notes"
            type="textarea"
            label="Jot down notes"
            action={handleNotesChange}
            value={notes}
          />
        </div>
        <div className="mb-6 p-4 bg-amber-200 flex">
          <span className="text-xs">
            {`Things didn't go as planned? `}
            <button className="text-gray-800 underline" onClick={handleReset}>
              Back to the drawing board.
            </button>
          </span>
        </div>
      </section>
    </Container>
  )
}

export default OverviewSection
