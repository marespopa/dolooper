import localforage from 'localforage'
import { type Task } from '../types/types'

const keys = {
  tasks: 'tasks',
  issue: 'issue',
  estimation: 'estimation',
  startTime: 'startTimeForTimer',
  elapsedTime: 'elapsedTimeForTimer',
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

async function setStartTime(description: string) {
  try {
    return await localforage.setItem(keys.startTime, description)
  } catch (err) {
    console.error(err)
  }
}

async function getStartTime() {
  try {
    const value = await localforage.getItem(keys.startTime)
    return value as string
  } catch (err) {
    console.error(err)
  }
}

async function removeStartTime() {
  try {
    return await localforage.removeItem(keys.startTime)
  } catch (err) {
    console.error(err)
  }
}

async function setElapsedTime(description: string) {
  try {
    return await localforage.setItem(keys.elapsedTime, description)
  } catch (err) {
    console.error(err)
  }
}

async function getElapsedTime() {
  try {
    const value = await localforage.getItem(keys.elapsedTime)
    return value as string
  } catch (err) {
    console.error(err)
  }
}

async function removeElapsedTime() {
  try {
    return await localforage.removeItem(keys.elapsedTime)
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
  setStartTime,
  getStartTime,
  removeStartTime,
  getElapsedTime,
  setElapsedTime,
  removeElapsedTime,
  resetAll,
  hasEntries,
  hasDescription,
}

export default service
