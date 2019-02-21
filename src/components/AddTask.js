import React, { Component } from "react";
import FormField from "./FormField";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      link: "",
      description: "",
      plan: ""
    };
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

        <button className="btn success" onClick={this.handleSubmit}>
          Create
        </button>
      </form>
    );
  }
}

export default AddTask;
