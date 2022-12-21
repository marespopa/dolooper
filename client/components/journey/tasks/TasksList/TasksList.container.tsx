import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import service from '../../../../services/service'
import { Task, TaskArea } from '../../../../types/types'
import Input from '../../../forms/input/Input.component'
import TasksListComponent from './TasksList.component'

interface Props {
  area: TaskArea
}

const TasksList = ({ area }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState<string>('')
  const [showAddForm, setShowAddForm] = useState(area === 'journey')
  const [showToggleAddForm, setShowToggleAddForm] = useState(
    area === 'overview',
  )
  const showHeading = area === 'overview'
  const showNoTasksInfo = area === 'overview'

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

  const handleAdd = (taskMessage: string) => {
    if (area === 'overview') {
      setShowAddForm(false)
      setShowToggleAddForm(true)
    }

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

  const handleDelete = (taskUUID: string) => {
    console.log(`Delete ${taskUUID}`)
    const arr = tasks.filter((item) => item.key !== taskUUID)

    setTasks(arr)
    service.setTasks(arr)
  }

  function handleToggle(key: string) {
    const nextTasks = tasks.map((task) => {
      if (task.key === key) {
        return { ...task, isDone: !task.isDone }
      }

      return task
    })

    setTasks(nextTasks)
    service.setTasks(nextTasks)
  }

  function toggleShowAddForm() {
    setShowAddForm(!showAddForm)
    setShowToggleAddForm(false)
  }

  const isDisabled = task.length === 0
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleAdd(task)
  }

  const AddTaskForm = (
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
        onClick={() => handleAdd(task)}
        disabled={isDisabled}
      >
        Add Task
      </button>
    </form>
  )

  return (
    <div className="w-full px-2 py-3 bg-white">
      <TasksListComponent
        tasks={tasks}
        actions={{
          handleDelete: handleDelete,
          handleToggle: handleToggle,
        }}
        showHeading={showHeading}
        showNoTasksInfo={showNoTasksInfo}
        area={area}
      />
      {showToggleAddForm && (
        <div className="pt-4 flex">
          <button
            className="mx-auto -mb-10 shadow-md w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white"
            onClick={toggleShowAddForm}
          >
            +
          </button>
        </div>
      )}
      {showAddForm && AddTaskForm}
    </div>
  )
}

export default TasksList
