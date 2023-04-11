import React from 'react'
import { Task, TaskActions, TaskArea } from '../../../../types/types'
import TaskEntry from './TaskEntry'

interface Props {
  tasks: Task[]
  actions: TaskActions
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
  const isOverview = area === 'overview'

  return (
    <>
      {showHeading && <h2 className="font-bold mt-0 mb-3">Tasks</h2>}
      {tasks.length > 0 && (
        <ul className={`list-none`}>
          {tasks.map((task) => {
            return (
              <TaskEntry
                key={task.key}
                task={task}
                isOverview={isOverview}
                actions={actions}
              />
            )
          })}
        </ul>
      )}
      {tasks.length === 0 && showNoTasksInfo && (
        <p className="py-2 sm:py-4">No tasks.</p>
      )}
    </>
  )
}

export default TasksListComponent
