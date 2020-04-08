import utils from '../services/utils'

export const addTask = task => {
  return {
    type: 'ADD_TASK',
    id: utils.generateUUID(),
    task,
  }
}

export const removeTask = id => {
  return {
    type: 'REMOVE_TASK',
    id,
  }
}

export const updateTask = task => {
  return {
    type: 'UPDATE_TASK',
    task,
  }
}
