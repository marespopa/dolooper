import Input from '@/components/forms/input/Input'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { TaskArea } from '../../../../types/types'
import ButtonSecondary from '../../../forms/buttons/ButtonSecondary'
import TasksListComponent from './TasksList.component'
import { useAtom } from 'jotai'
import { atom_subTasks } from 'jotai/atoms'

interface Props {
  area: TaskArea
}

const TasksList = ({ area }: Props) => {
  const [tasks, setTasks] = useAtom(atom_subTasks)
  const [task, setTask] = useState<string>('')
  const showHeading = area === 'overview'
  const taskAddLabel =
    area === 'overview'
      ? tasks.length > 0
        ? 'Add another subtask'
        : 'Add a subtask'
      : 'Describe your subtask'

  const resetTask = () => {
    setTask('')
  }

  const handleAdd = (taskMessage: string) => {
    const updatedTasks = [
      ...tasks,
      {
        key: nanoid(),
        value: taskMessage,
        isDone: false,
      },
    ]

    setTasks(updatedTasks)
    resetTask()
  }

  const handleEdit = (taskUUID: string, newValue: string) => {
    const nextTasks = tasks.map((task) => {
      if (task.key === taskUUID) {
        return { ...task, value: newValue }
      }

      return task
    })

    setTasks(nextTasks)
  }

  const handleDelete = (taskUUID: string) => {
    const arr = tasks.filter((item) => item.key !== taskUUID)

    setTasks(arr)
  }

  function handleToggle(key: string) {
    const nextTasks = tasks.map((task) => {
      if (task.key === key) {
        return { ...task, isDone: !task.isDone }
      }

      return task
    })

    setTasks(nextTasks)
  }

  const isDisabled = task.length === 0
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleAdd(task)
  }

  return (
    <div className="w-full">
      <TasksListComponent
        tasks={tasks}
        actions={{
          handleEdit,
          handleDelete,
          handleToggle,
        }}
        showHeading={showHeading}
        area={area}
      />
      {renderAddTask()}
    </div>
  )

  function renderAddTask() {
    return (
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="flex-auto">
            <Input
              id="task"
              value={task}
              action={setTask}
              label={taskAddLabel}
            />
          </div>
          <ButtonSecondary
            action={() => handleAdd(task)}
            isDisabled={isDisabled}
          >
            Add
          </ButtonSecondary>
        </div>
      </form>
    )
  }
}

export default TasksList
