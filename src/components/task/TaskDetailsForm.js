import React from 'react'
import PropTypes from 'prop-types'
import FormField from '../FormField'
import Tooltip from '../widgets/Tooltip'

const TaskDetailsForm = ({
  action,
  task,
  handleKeyboardSave,
  handleInputChange,
  handleSubmit
}) => (
  <form
    className="form"
    onKeyDown={handleKeyboardSave}
    onSubmit={handleSubmit}
    method="post"
  >
    <h2 className="form-title">{action.title} a task</h2>
    <FormField
      label="Title"
      name="title"
      value={task.title}
      type="input"
      handleChange={handleInputChange}
    />

    <FormField
      label="Link"
      name="link"
      value={task.link}
      type="link"
      handleChange={handleInputChange}
    />

    <FormField
      label={
        <span>
          Tags
          <Tooltip text="You can add multiple tags by using comma: tag1, tag2"></Tooltip>
        </span>
      }
      name="tags"
      value={task.tags}
      type="input"
      handleChange={handleInputChange}
    />

    <FormField
      label="Description"
      name="description"
      value={task.description}
      type="textarea"
      handleChange={handleInputChange}
    />

    <FormField
      label="The Plan"
      name="plan"
      value={task.plan}
      type="textarea"
      handleChange={handleInputChange}
    />
    <div className="form-row">
      <button disabled={!action.isChanged || action.isSaved} className="btn success">
        Save
      </button>
      {action.messages.error}
      {action.messages.success}
      {action.messages.link}
    </div>
  </form>
)

TaskDetailsForm.propTypes = {
  task: PropTypes.object,
  action: PropTypes.object,
  handleKeyboardSave: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default TaskDetailsForm
