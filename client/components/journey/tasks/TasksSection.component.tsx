import React, { useEffect, useState } from 'react'
import { type Task } from '../../../types/types'
import Input from '../../forms/input/Input.component'
import uuid from 'react-uuid'
import TasksList from './TasksList.component'
import service from '../../../services/service'
import SectionHeading from '../common/SectionHeading.component'

const TasksSection = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState<string>('')

  const resetTask = () => {
    setTask('')
  }

  useEffect(() => {
    service.getTasks().then((results) => {
      if (!results) {
        return
      }

      setTasks(results)
    })
  }, [])

  const handleAddTask = (taskMessage: string) => {
    const updatedTasks = [
      ...tasks,
      {
        key: uuid(),
        value: taskMessage,
        isDone: false,
      },
    ]
    setTasks(updatedTasks)
    service.setTasks(updatedTasks)
    resetTask()
  }

  const handleDeleteTask = (taskUUID: string) => {
    const arr = tasks.filter((item) => item.key !== taskUUID)

    setTasks(arr)
    service.setTasks(arr)
  }

  const isDisabled = task.length === 0
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleAddTask(task)
  }

  return (
    <section className="mt-10">
      <SectionHeading
        title="Tasks"
        description="What are the tasks that need to be done, so we can call this a success?"
      />
      <div className="mb-3">
        <form onSubmit={handleSubmit}>
          <Input
            id="task"
            type={'text'}
            value={task}
            action={setTask}
            label="Define your task"
          />

          <button
            className="mx-2 mt-2 h-full px-5 py-2 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
                    focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg disabled:opacity-25 transition duration-150 ease-in-out"
            onClick={() => handleAddTask(task)}
            disabled={isDisabled}
          >
            Add Task
          </button>
        </form>
      </div>
      {tasks.length > 0 && (
        <TasksList tasks={tasks} handleDelete={handleDeleteTask} />
      )}
      {tasks.length === 0 && <div>No tasks yet.</div>}
    </section>
  )
}

export default TasksSection
