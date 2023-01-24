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
  const showHeading = area === 'overview'
  const showNoTasksInfo = area === 'overview'
  const taskAddLabel =
    area === 'overview' ? 'Add another subtask' : 'Define your subtask'
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

  const isDisabled = task.length === 0
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleAdd(task)
  }

  const AddTaskForm = (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className="flex-auto">
          <Input
            id="task"
            type={'text'}
            value={task}
            action={setTask}
            label={taskAddLabel}
          />
        </div>
        <button
          className="inline-block px-6 py-2.5 text-white font-medium text-md leading-tight
                    border border-gray-600 bg-gray-600
                    hover:bg-gray-800 hover:text-white
                    focus:bg-gray-800 focus:text-white
                    active:shadow-lg
                    cursor-pointer disabled:opacity-25 transition duration-150 ease-in-out"
          onClick={() => handleAdd(task)}
          disabled={isDisabled}
        >
          Add
        </button>
      </div>
    </form>
  )

  return (
    <div className="w-full">
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
      {AddTaskForm}
    </div>
  )
}

export default TasksList
