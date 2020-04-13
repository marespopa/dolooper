import React, { Component } from 'react'
import FormField from '../FormField'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class EditTask extends Component {
  constructor(props) {
    super(props)
    const task = props
    this.state = {
      task,
      isSaved: true,
      hasBeenChanged: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyboardSave = this.handleKeyboardSave.bind(this)
    this.saveTask = this.saveTask.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      task: {
        ...this.state.task,
        [name]: value,
      },
      isSaved: false,
      hasErrorAtSave: false,
      hasBeenChanged: true,
    })
  }

  handleKeyboardSave(event) {
    let charCode = String.fromCharCode(event.which).toLowerCase()

    if (event.metaKey && charCode === 's') {
      event.preventDefault()
      const task = this.state.task
      this.saveTask(task)
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const task = this.state.task
    this.saveTask(task)
  }

  saveTask(task) {
    try {
      this.props.updateTask(task)
      this.setState({
        isSaved: true,
        hasErrorAtSave: false,
      })
    } catch (error) {
      this.setState({
        hasErrorAtSave: true,
      })
    }
  }

  render() {
    const { title, link, tags, description, plan } = this.state.task
    const { isSaved, hasErrorAtSave, hasBeenChanged } = this.state
    const errorMessage = hasErrorAtSave && (
      <span className="message error">We could not save the task...</span>
    )
    const successMessage = isSaved && hasBeenChanged && (
      <>
        <span className="message success">Task has been saved.</span>
      </>
    )
    const linkMessage = (
      <span className="message link">
        <Link to="/tasks">Back to Dashboard.</Link>
      </span>
    )
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
        method="post"
        onKeyDown={this.handleKeyboardSave}
      >
        <h2 className="form-title">Edit a task</h2>
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
          type="link"
          handleChange={this.handleInputChange}
        />

        <FormField
          label="Tags"
          name="tags"
          value={tags}
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
          <button disabled={isSaved} className="btn success">
            Save
          </button>
          {errorMessage}
          {successMessage}
          {linkMessage}
        </div>
      </form>
    )
  }
}

EditTask.propTypes = {
  task: PropTypes.array,
  updateTask: PropTypes.func,
}

export default EditTask
