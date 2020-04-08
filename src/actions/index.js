import utils from '../services/utils'

export const addTask = task => {
  task.id = utils.generateUUID();
  return {
    type: 'ADD_TASK',
    task,
  }
}

export const removeTask = id => {
  return {
    type: 'REMOVE_TASK',
    id,
  }
}

export const pinTask = task => {
  task.isPinned = Object.prototype.hasOwnProperty.call(task, 'isPinned') ?
                  !task.isPinned :
                  false;

  return {
    type: 'UPDATE_TASK',
    task,
  }
}

export const updateTask = task => {
  return {
    type: 'UPDATE_TASK',
    task,
  }
}
