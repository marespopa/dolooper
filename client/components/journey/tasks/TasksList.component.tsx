import React from 'react'
import { Task } from '../../../types/types'

interface Props {
  tasks: Task[]
  handleDelete: (key: string) => void
}

const TasksList = ({ tasks, handleDelete }: Props) => {
  return (
    <div>
      <ul className="flexspace-y-1 list-disc list-inside text-gray-700">
        {tasks.map((task) => (
          <li
            key={task.key}
            className="flex justify-between px-2 py-4 hover:bg-amber-100 hover:text-b-900 transition-all duration-300 ease-in-out"
          >
            <span>{task.value}</span>

            <button
              className=" text-red-600 mr-2 font-medium rounded-md flex-end text-sm hover:underline"
              onClick={() => handleDelete(task.key)}
            >
              remove task
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TasksList
