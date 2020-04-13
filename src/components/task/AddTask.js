import React, { Component } from 'react'
import FormField from '../FormField'
import tasksService from '../../services/tasksService'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class AddTask extends Component {
  constructor(props) {
    super(props)

    const blankTask = tasksService.getBlankTask()
    this.state = blankTask
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyboardSave = this.handleKeyboardSave.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleKeyboardSave(event) {
    let charCode = String.fromCharCode(event.which).toLowerCase()

    if (event.metaKey && charCode === 's') {
      event.preventDefault()
      const task = this.state
      this.addTask(task)
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const task = this.state
    this.addTask(task)
  }

  addTask(task) {
    this.props.addTask(task)
    this.props.history.push('/tasks')
  }

  render() {
    const { title, link, tags, description, plan } = this.state

    const linkMessage = (
      <span className="message link">
        <Link to="/tasks">Back to Dashboard.</Link>
      </span>
    )

    return (
      <form
        className="form add-task"
        onKeyDown={this.handleKeyboardSave}
        onSubmit={this.handleSubmit}
        method="post"
      >
        <h2 className="form-title">Create a task</h2>
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
          <button className="btn success">Create</button>
          {linkMessage}
        </div>
      </form>
    )
  }
}

AddTask.propTypes = {
  addTask: PropTypes.func,
  history: PropTypes.object,
}

export default AddTask
