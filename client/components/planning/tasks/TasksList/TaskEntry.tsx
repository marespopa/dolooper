import ButtonSecondary from '@/components/forms/buttons/ButtonSecondary'
import ButtonDropdown from '@/components/forms/buttons/ButtonDropdown'
import Checkbox from '@/components/forms/input/Checkbox'
import Input from '@/components/forms/input/Input'
import React, { useState } from 'react'
import { Task, TaskActions } from 'types/types'

type Props = {
  task: Task
  isOverview: boolean
  actions: TaskActions
}

const TaskEntry = ({ task, isOverview, actions }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [editValue, setEditValue] = useState(task.value)
  const isUpdateDisabled = !editValue || editValue.length === 0
  const isTogglable = isOverview

  if (isEditMode) {
    return (
      <li key={task.key} className={`${taskEditStyle}`}>
        {renderEditForm()}
      </li>
    )
  }

  return (
    <li
      key={task.key}
      className={isOverview ? taskStyleOverview : taskStylePlanning}
    >
      {isTogglable && renderTaskWithCheckbox()}
      {!isTogglable && (
        <span className="text-sm font-medium">{task.value}</span>
      )}
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
      <div className="ml-auto flex-end text-xs">
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

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
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
            action={handleEditValue}
            label={'Edit Task'}
          />
        </span>
        <ButtonSecondary
          action={() => handleUpdateTask(task.key, editValue)}
          text="Save"
          isDisabled={isUpdateDisabled}
        />
      </form>
    )
  }
}

const taskEditStyle = `flex align-middle p-0 my-2
                       transition-all duration-400 ease-in-out`

const taskStyleOverview = `bg-amber-50 my-4 flex align-middle px-4 py-2
                           dark:bg-gray-700`

const taskStylePlanning = `flex align-middle p-4
                  hover:text-b-900
                  focus:cursor-pointer
                  transition-all duration-400 ease-in-out
                  first:mt-0 my-2 bg-white border border-gray-200
                  dark:bg-gray-700 dark:border-gray-600`

export default TaskEntry
