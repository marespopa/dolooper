import ButtonSecondary from '@/components/forms/buttons/ButtonSecondary'
import ButtonDropdown from '@/components/forms/buttons/ButtonDropdown'
import Checkbox from '@/components/forms/input/Checkbox'
import Input from '@/components/forms/input/Input'
import React, { SyntheticEvent, useState } from 'react'
import { Task, TaskActions } from 'types/types'
import { DraggableProvided } from 'react-beautiful-dnd'

type Props = {
  task: Task
  actions: TaskActions
  provided: DraggableProvided
  isDragged: boolean
}

const SubtaskEntry = ({ task, actions, provided, isDragged }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [editValue, setEditValue] = useState(task.value)
  const isUpdateDisabled = !editValue || editValue.length === 0

  if (isEditMode) {
    return (
      <li
        key={task.key}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`${taskEditStyle}`}
      >
        {renderEditForm()}
      </li>
    )
  }

  return (
    <li
      key={task.key}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={getTaskStyle(isDragged)}
    >
      {renderTaskWithCheckbox()}
      {renderControlPanel()}
    </li>
  )

  function handleEditValue(value: string) {
    setEditValue(value)
  }

  function handleUpdateTask(key: string, value: string) {
    setIsEditMode(false)
    setEditValue(value)

    return actions.handleEdit(key, value)
  }

  function handleEditToggle() {
    setIsEditMode(!isEditMode)
  }

  function renderTaskWithCheckbox() {
    return (
      <Checkbox
        uuid={task.key}
        label={task.value}
        isChecked={task.isDone}
        setIsChecked={(key) => actions.handleToggle(key)}
      />
    )
  }

  function renderControlPanel() {
    return (
      <div className={`ml-auto flex-end text-xs ${isDragged && 'hidden'}`}>
        <ButtonDropdown
          name={`task-${task.key}-dropdownMenu`}
          label={''}
          menuItems={[
            {
              id: task.key,
              label: 'Edit',
              action: handleEditToggle,
            },
            {
              id: task.key,
              label: 'Remove',
              action: actions.handleDelete,
            },
          ]}
        />
      </div>
    )
  }

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()

    handleUpdateTask(task.key, editValue)
  }

  function renderEditForm() {
    return (
      <form onSubmit={handleSubmit} className="flex flex-row w-full">
        <span className="flex-auto">
          <Input
            id={`task-${task.key}`}
            value={editValue}
            handleChange={handleEditValue}
            label={'Edit Task'}
          />
        </span>
        <ButtonSecondary
          action={() => handleUpdateTask(task.key, editValue)}
          isDisabled={isUpdateDisabled}
        >
          Save
        </ButtonSecondary>
      </form>
    )
  }
}

const taskEditStyle = `flex align-middle p-0 my-2
                       transition duration-400 ease-in-out`

const taskStyle = `first:mt-0 my-1 rounded-md my-4 flex align-middle px-4 py-2
                  focus:cursor-pointer transition-colors duration-400 ease-in-ou`

const getTaskStyle = (isDragged: boolean) => {
  const background = isDragged
    ? 'bg-blue-200 dark:bg-blue-300 dark:text-gray-700'
    : 'bg-white dark:bg-gray-800 dark:text-gray-200'
  return `${taskStyle} ${background}`
}

export default SubtaskEntry
