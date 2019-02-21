const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: action.id,
          task: { id: action.id, ...action.task }
        }
      ];
    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.id);
    case "UPDATE_TASK":
      const updatedTask = {
        id: action.task.id,
        task: action.task
      };
      return state.map(task => {
        let isIdMatching = task.id.trim() === updatedTask.id.trim();

        if (!isIdMatching) {
          return task;
        }

        return {
          ...task,
          ...updatedTask
        };
      });
    default:
      return state;
  }
};

export default tasks;
