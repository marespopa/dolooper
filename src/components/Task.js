import React from "react";
import { Link } from "react-router-dom";
import TaskSection from "./TaskSection";

const Task = ({ removeHandler, task }) => {
  const linkRef = "task/" + task.id;
  return (
    <div className="task">
      <TaskSection type="text" label="Title" content={task.title} />
      <TaskSection type="link" label="Link" content={task.link} />
      <TaskSection type="long-text" label="Description" content={task.description} />
      <TaskSection type="long-text" label="The Plan" content={task.plan} />
      <button className="btn primary">
        <Link to={linkRef}>Edit Task</Link>
      </button>
      <button className="btn danger" onClick={removeHandler}>
        Remove
      </button>
    </div>
  );
};
export default Task;
