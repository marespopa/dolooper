import React, { Component } from 'react'
import TaskDetailsForm from './TaskDetailsForm'
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
    const { isSaved, hasErrorAtSave, hasBeenChanged } = this.state
    const action = {
      title: 'Create',
      messages: {
        link:  (
          <span className="message link">
            <Link to="/tasks">Back to Dashboard.</Link>
          </span>
        ),
        success: isSaved && hasBeenChanged && (
          <>
            <span className="message success">Task has been saved.</span>
          </>
        ),
        error: hasErrorAtSave && (
          <span className="message error">We could not save the task...</span>
        )
      }
    }
    const task =  this.state.task;

    return (
      <TaskDetailsForm
        action={action}
        task={task}
        handleKeyboardSave={this.handleKeyboardSave}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      ></TaskDetailsForm>
    )
  }
}

EditTask.propTypes = {
  task: PropTypes.array,
  updateTask: PropTypes.func,
}

export default EditTask
