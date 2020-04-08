import React from 'react'
import Task from './Task'
import PropTypes from 'prop-types'

const TaskList = ({ tasks, pinTask, removeTask }) => {
  const hasTasks = tasks.length > 0

  const removeHandler = taskId => {
    var confirmDialog = window.confirm('Are you sure you want to remove task?')
    if (confirmDialog === true) {
      removeTask(taskId)
    }
  }

  const pinHandler = task => {
    pinTask(task)
  }

  const ListRender =
    hasTasks &&
    tasks
      .sort(function(a, b) {
        // true values first
        return a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1
      })
      .map(task => (
        <Task
          key={task.id}
          task={task}
          pinHandler={() => pinHandler(task)}
          removeHandler={() => removeHandler(task.id)}
        />
      ))
  const BlankState = !hasTasks && <h2>No tasks. Enjoy! :)</h2>
  return (
    <div className="task-list">
      {BlankState}
      {ListRender}
    </div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  pinTask: PropTypes.func,
  removeTask: PropTypes.func,
}

export default TaskList
