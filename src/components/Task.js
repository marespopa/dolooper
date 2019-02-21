import React from "react";
import TaskSection from "./TaskSection";
import { withRouter } from "react-router-dom";

const EditButton = withRouter(({ history, linkRef }) => (
  <button
    type="button"
    className="btn primary"
    onClick={() => {
      history.push(linkRef);
    }}
  >
    Edit Task
  </button>
));

const Task = ({ removeHandler, task }) => {
  const linkRef = "task/" + task.id;
  return (
    <div className="task">
      <button className="btn danger remove-task" onClick={removeHandler}>
        Remove
      </button>
      <h2>{task.title}</h2>
      <TaskSection type="link" label="Link" content={task.link} />
      <TaskSection
        type="long-text"
        label="Description"
        content={task.description}
      />
      <TaskSection type="long-text" label="The Plan" content={task.plan} />
      <EditButton linkRef={linkRef} />
    </div>
  );
};
export default Task;
