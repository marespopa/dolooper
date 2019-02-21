import React, { Component } from "react";
import FormField from "./FormField";

class EditTask extends Component {
  constructor(props) {
    super(props);
    const task = props.task;
    this.state = {
      task,
      isSaved: true,
      saveMessage: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      task: {
        ...this.state.task,
        [name]: value
      },
      isSaved: false,
      hasErrorAtSave: false,
      saveMessage: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const task = this.state.task;
    try {
      this.props.updateTask(task);
      this.setState({
        isSaved: true,
        hasErrorAtSave: false,
        saveMessage: 'Task has been saved.'
      });
    } catch (error) {
      this.setState({
        hasErrorAtSave: true
      });
    }
  }

  render() {
    const { title, link, description, plan } = this.state.task;
    const { isSaved, hasErrorAtSave, saveMessage } = this.state;
    const errorMessage = hasErrorAtSave && (
      <span className="message error">We could not save the task...</span>
    );
    const successMessage = isSaved && (
      <span className="message success">{saveMessage}</span>
    );
    return (
      <form className="form" onSubmit={this.handleSubmit} method="post">
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
          <button
            disabled={isSaved}
            className="btn success"
            onClick={this.handleSubmit}
          >
            Save
          </button>
          {errorMessage}
          {successMessage}
        </div>
      </form>
    );
  }
}

export default EditTask;
