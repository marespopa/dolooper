import React, { Component } from 'react'
import Task from './Task'
import PropTypes from 'prop-types'
import Tooltip from './widgets/Tooltip'

class TasksWithFilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value

    this.setState({
      query: value,
    })
  }

  render() {
    const tasks = this.props.tasks
    const hasTasks = tasks.length > 0
    const pinTask = this.props.pinTask
    const removeTask = this.props.removeTask
    const query = this.state.query
    const queryTags = query.indexOf(',') > 0 ? query.split(',') : [query]

    const hasTags = function (task) {
      if (query.length === 0) {
        return true
      }

      for (var i = 0; i <= queryTags.length; i++) {
        const hasTag = task.tags.indexOf(queryTags[i]) > -1
        if (hasTag) {
          return true
        }
      }

      return false
    }

    return (
      <div className="tasks-list">
        {!hasTasks && (
          <div className="no-tasks">
            <h1>No tasks. Enjoy :)</h1>
          </div>
        )}
        {hasTasks && (
          <div
            className="search-row"
            title="You can use a semicolon to search for multiple tags"
          >
            <label>Limit by tags</label>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
              required
            />
            <Tooltip text="Search for multiple tags by using comma: tag1, tag2"></Tooltip>
          </div>
        )}
        {tasks
          .filter(function (task) {
            return hasTags(task)
          })
          .sort(function (a, b) {
            // true values first
            return a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1
          })
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              pinHandler={() => pinTask(task)}
              removeHandler={() => removeTask(task.id)}
            />
          ))}
      </div>
    )
  }
}

TasksWithFilter.propTypes = {
  tasks: PropTypes.array,
  pinTask: PropTypes.func,
  removeTask: PropTypes.func,
}

export default TasksWithFilter
