import React from 'react'
import { Task, TaskArea } from '../../../../types/types'
import ButtonDropdown from '../../../forms/buttons/ButtonDropdown/ButtonDropdown.component'
import Checkbox from '../../../forms/input/Checkbox.component'

interface Props {
  tasks: Task[]
  actions: {
    handleDelete: (_key: string) => void
    handleToggle: (_key: string) => void
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
                    {task.value}
                  </span>
                )}
                <div className="ml-auto flex-end text-xs">
                  <ButtonDropdown
                    name={`task-${task.key}-dropdownMenu`}
                    label={''}
                    menuItems={[
                      {
                        id: task.key,
                        label: 'Remove',
                        action: actions.handleDelete,
                      },
                    ]}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      )}
      {tasks.length === 0 && showNoTasksInfo && <p>No subtasks.</p>}
    </>
  )
}

const taskStyle = `flex align-middle p-2 my-2
                  hover:cursor-pointer
                  hover:bg-gray-100 hover:text-b-900
                  focus:cursor-pointer
                  transition-all duration-300 ease-in-out`

export default TasksListComponent
