import localforage from 'localforage'
import { type Task } from '../types/types'

const keys = {
  tasks: 'tasks',
  issue: 'issue',
  estimation: 'estimation',
  timerDefault: 'timerDefault',
}

const MIN_VALID_FIELDS = 1

async function setDescription(description: string) {
  try {
    return await localforage.setItem(keys.issue, description)
  } catch (err) {
    console.error(err)
  }
}

async function getDescription() {
  try {
    const value = await localforage.getItem(keys.issue)
    return value as string
  } catch (err) {
    console.error(err)
  }
}

async function setPomodoroTimer(description: string) {
  try {
    return await localforage.setItem(keys.timerDefault, description)
  } catch (err) {
    console.error(err)
  }
}

async function getPomodoroTimer() {
  try {
    const value = await localforage.getItem(keys.timerDefault)
    return value as string
  } catch (err) {
    console.error(err)
  }
}

async function setTasks(tasks: Task[]) {
  try {
    return await localforage.setItem(keys.tasks, tasks)
  } catch (err) {
    console.error(err)
  }
}

async function getTasks() {
  try {
    const value = await localforage.getItem(keys.tasks)
    return value as Task[]
  } catch (err) {
    console.error(err)
  }
}

async function setEstimation(interval: number) {
  try {
    return await localforage.setItem(keys.estimation, interval)
  } catch (err) {
    console.error(err)
  }
}

async function getEstimation() {
  try {
    const value = await localforage.getItem(keys.estimation)

    return value as number
  } catch (err) {
    console.error(err)
  }
}

async function hasDescription() {
  try {
    const value = await localforage.getItem(keys.issue)

    return !!value
  } catch (err) {
    console.error(err)
  }
}

async function hasEntries() {
  try {
    const length = await localforage.length()

    return length >= MIN_VALID_FIELDS
  } catch (err) {
    console.error(err)
  }
}

function resetAll() {
  localforage.clear()
}

const service = {
  getDescription,
  setDescription,
  setTasks,
  getTasks,
  setEstimation,
  getEstimation,
  setPomodoroTimer,
  getPomodoroTimer,
  resetAll,
  hasEntries,
  hasDescription,
}

export default service
