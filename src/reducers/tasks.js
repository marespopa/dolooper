const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        {
          id: action.id,
          ...action.task
        },
        ...state
      ]
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.id)
    case 'UPDATE_TASK': {
      const updatedTask = {
        ...action.task
      }
      return state.map((task) => {
        let isIdMatching = task.id.trim() === updatedTask.id.trim()

        if (!isIdMatching) {
          return task
        }

        return {
          ...task,
          ...updatedTask
        }
      })
    }
    default:
      return state
  }
}

export default tasks
