import React from 'react'
import { Task } from '../../../types/types'

interface Props {
  tasks: Task[]
  handleDelete: (key: string) => void
}

const TasksList = ({ tasks, handleDelete }: Props) => {
  return (
    <div>
      <ul className="border border-gray-100 rounded overflow-hidden shadow-md">
        {tasks.map((task) => (
          <li
            key={task.key}
            className="flex justify-between align-middle border-gray-100 px-4 py-2 bg-white hover:bg-gray-100 hover:text-b-900 border-b last:border-none transition-all duration-300 ease-in-out"
          >
            <span>{task.value}</span>

            <button
              className=" text-red-600 px-2 font-medium rounded-md flex-end text-sm hover:underline"
              onClick={() => handleDelete(task.key)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TasksList
