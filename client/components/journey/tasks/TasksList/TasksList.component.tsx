import React from 'react'
import { Task, TaskArea } from '../../../../types/types'
import Checkbox from '../../../forms/input/Checkbox.component'

interface Props {
  tasks: Task[]
  actions: {
    handleDelete: (key: string) => void
    handleToggle: (key: string) => void
  }
  showHeading?: boolean
  showNoTasksInfo?: boolean
  area: TaskArea
}

const TasksListComponent = ({
  tasks,
  actions,
  showHeading = false,
  showNoTasksInfo = false,
  area,
}: Props) => {
  const isTaskTogglable = area === 'overview'
  return (
    <>
      {showHeading && <h2 className="font-bold mt-0 mb-3">Tasks</h2>}
      {tasks.length > 0 && (
        <ul className="list-none">
          {tasks.map((task) => {
            return (
              <li key={task.key} className={taskStyle}>
                {isTaskTogglable && (
                  <span className={task.isDone ? 'line-through' : ''}>
                    <Checkbox
                      uuid={task.key}
                      label={task.value}
                      isChecked={task.isDone}
                      setIsChecked={(key) => actions.handleToggle(key)}
                    />
                  </span>
                )}

                {!isTaskTogglable && (
                  <span className="text-sm font-medium text-gray-900">
                    task.value
                  </span>
                )}

                <button
                  className="ml-auto text-red-600 mr-2 font-medium rounded-md flex-end text-xs
                             hover:underline"
                  onClick={() => actions.handleDelete(task.key)}
                >
                  Remove task
                </button>
              </li>
            )
          })}
        </ul>
      )}
      {tasks.length === 0 && showNoTasksInfo && <p>No tasks.</p>}
    </>
  )
}

const taskStyle = `flex align-middle py-4 px-2 hover:cursor-pointer focus:cursor-pointer hover:bg-gray-100 hover:text-b-900 transition-all duration-300 ease-in-out`

export default TasksListComponent
