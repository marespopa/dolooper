import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask }) => {
  const hasTasks = tasks.length > 0;
  const ListRender =
    hasTasks &&
    tasks.map(task => (
      <Task key={task.id} {...task} removeHandler={() => removeTask(task.id)} />
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
