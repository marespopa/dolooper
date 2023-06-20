import React from 'react'
import { Task, TaskActions, TaskArea } from '../../../../types/types'
import TaskEntry from './TaskEntry'

interface Props {
  tasks: Task[]
  actions: TaskActions
  showHeading?: boolean
  area: TaskArea
}

const TasksListComponent = ({
  tasks,
  actions,
  showHeading = false,
  area,
}: Props) => {
  const isOverview = area === 'overview'

  return (
    <>
      {showHeading && <h2 className="font-bold mt-0 mb-3">Subtasks</h2>}
      {tasks.length > 0 && (
        <ul className={`list-none mb-4`}>
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
    </>
  )
}

export default TasksListComponent
