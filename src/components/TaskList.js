import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask }) => {
  const hasTasks = tasks.length > 0;
  const removeHandler = taskId => {
    var confirmDialog = window.confirm("Are you sure you want to remove task?");
    if (confirmDialog === true) {
      removeTask(taskId);
    }
  };
  const ListRender =
    hasTasks &&
    tasks.map(task => (
      <Task
        key={task.id}
        {...task}
        removeHandler={() => removeHandler(task.id)}
      />
    ));
  const BlankState = !hasTasks && <h2>No tasks. Enjoy! :)</h2>;
  return (
    <div className="task-list">
      {BlankState}
      {ListRender}
    </div>
  );
};

export default TaskList;
