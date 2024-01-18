import React from 'react'
import { Task, TaskActions } from '../../../../types/types'
import TaskEntry from './TaskEntry'
import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from '@/components/strict-mode-droppable/StrictModeDroppable'

interface Props {
  tasks: Task[]
  actions: TaskActions
}

const TasksListComponent = ({ tasks, actions }: Props) => {
  const onDragEnd = (result: any) => {
    // Dropped outside the list
    if (!result.destination) {
      return
    }

    actions.handleReorder(result.source.index, result.destination.index)
  }

  return (
    <>
      {tasks.length > 0 && (
        <div className="mb-4">
          <DragDropContext onDragEnd={onDragEnd}>
            <StrictModeDroppable droppableId="droppable">
              {(provided) => (
                <ul
                  className={`list-none`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task.key}
                      draggableId={task.key}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <TaskEntry
                          isDragged={snapshot.isDragging}
                          provided={provided}
                          key={task.key}
                          task={task}
                          actions={actions}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </StrictModeDroppable>
          </DragDropContext>
        </div>
      )}
    </>
  )
}

export default TasksListComponent
