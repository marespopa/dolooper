import React, { useEffect, useState } from 'react'
import service from '../../services/service'
import { Task } from '../../types/types'
import Container from '../container/Container.component'
import Input from '../forms/input/Input.component'
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

  function handleTaskUpdate(key: string) {
    const nextTasks = tasks.map((task) => {
      console.log(task.isDone)
      if (task.key === key) {
        return { ...task, isDone: !task.isDone }
      }

      return task
    })

    setTasks(nextTasks)
    service.setTasks(nextTasks)
  }

  return (
    <Container>
      <section>
        {!isLoading && <Timer deadline={deadline} />}
        <div className="flex">
          <div className="flex-auto my-9 mr-3 px-2 py-3 bg-white">
            <h2 className="font-bold mt-0 mb-3">Plan</h2>
            <p>{plan}</p>
          </div>
          <div className="flex-auto my-9 ml-3 px-2 py-3 bg-white">
            <h2 className="font-bold mt-0 mb-3">Tasks</h2>
            <ul className="ml-8 list-decimal">
              {tasks.map((task) => (
                <li
                  key={task.key}
                  onClick={() => handleTaskUpdate(task.key)}
                  className={taskStyle(task.isDone)}
                >
                  <span>{task.value}</span>
                </li>
              ))}
            </ul>
          </div>
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

const taskStyle = (isDone: boolean) => {
  const style = `hover:cursor-pointer focus:cursor-pointer hover:bg-gray-100 hover:text-b-900 transition-all duration-300 ease-in-out`

  return `${style} ${isDone && 'line-through'}`
}
export default OverviewSection
