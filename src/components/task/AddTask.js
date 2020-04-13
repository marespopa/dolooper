import React, { Component } from 'react'
import TaskDetailsForm from './TaskDetailsForm'
import tasksService from '../../services/tasksService'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class AddTask extends Component {
  constructor(props) {
    super(props)

    const blankTask = tasksService.getBlankTask()
    this.state = blankTask
    this.isSaved = false
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
    this.isSaved = true
    this.props.addTask(task)
    this.props.history.push('/tasks')
  }

  render() {
    const action = {
      title: 'Create',
      messages: {
        link:  (
          <span className="message link">
            <Link to="/tasks">Back to Dashboard.</Link>
          </span>
        )
      },
      isChanged: true,
      isSaved: this.isSaved
    }
    const task =  this.state;

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

AddTask.propTypes = {
  addTask: PropTypes.func,
  history: PropTypes.object,
}

export default AddTask
