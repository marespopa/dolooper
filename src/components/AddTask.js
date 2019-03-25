import React, { Component } from "react";
import FormField from "./FormField";
import tasksService from "../services/tasksService";
import { Link } from "react-router-dom";

class AddTask extends Component {
  constructor(props) {
    super(props);
    const blankTask = tasksService.getBlankTask();
    this.state = blankTask;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const task = this.state;
    this.props.addTask(task);
    this.props.history.push("/tasks");
  }

  render() {
    const { title, link, description, plan } = this.state;

    const linkMessage = (
      <span className="message link">
        <Link to="/tasks">Back to Dashboard.</Link>
      </span>
    );

    return (
      <form
        className="form add-task"
        onSubmit={this.handleSubmit}
        method="post"
      >
        <h2 className="form-title">Add a task</h2>
        <FormField
          label="Title"
          name="title"
          value={title}
          type="input"
          handleChange={this.handleInputChange}
        />

        <FormField
          label="Link"
          name="link"
          value={link}
          type="input"
          handleChange={this.handleInputChange}
        />

        <FormField
          label="Description"
          name="description"
          value={description}
          type="textarea"
          handleChange={this.handleInputChange}
        />

        <FormField
          label="The Plan"
          name="plan"
          value={plan}
          type="textarea"
          handleChange={this.handleInputChange}
        />
        <div className="form-row">
          <button className="btn success" onClick={this.handleSubmit}>
            Create
          </button>
          {linkMessage}
        </div>
      </form>
    );
  }
}

export default AddTask;
