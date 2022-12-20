import React, { useEffect, useState } from 'react'
import service from '../../services/service'
import { Task } from '../../types/types'
import Container from '../container/Container.component'
import Input from '../forms/input/Input.component'
import TasksList from '../journey/tasks/TasksList'
import Timer from './timer'

const OverviewSection = () => {
  const [plan, setPlan] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [deadline, setDeadline] = useState<string>('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    service.getTasks().then((results) => {
      if (!results) {
        return
      }

      setTasks(results)
    })
  }, [])

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

  useEffect(() => {
    if (!('Notification' in window)) {
      console.log('Browser does not support desktop notification')
    } else {
      Notification.requestPermission()
    }
  })

  function handleNotesChange(value: string) {
    setNotes(value)
  }

  return (
    <Container>
      <section>
        {!isLoading && <Timer deadline={deadline} />}
        <div className="flex my-9">
          <div className="flex-auto mr-3 px-2 py-3 bg-white">
            <h2 className="font-bold mt-0 mb-3">Plan</h2>
            <p>{plan}</p>
          </div>
          <TasksList area="overview" />
        </div>
        <div className="my-9">
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
      </section>
    </Container>
  )
}

export default OverviewSection
