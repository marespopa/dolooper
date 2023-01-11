import localforage from 'localforage'
import { TimestampList, type Task } from '../types/types'

const keys = {
  tasks: 'tasks',
  plan: 'plan',
  estimation: 'estimation',
  timestamp: 'timelog',
}

async function setPlan(plan: string) {
  try {
    return await localforage.setItem(keys.plan, plan)
  } catch (err) {
    console.error(err)
  }
}

async function getPlan() {
  try {
    const value = await localforage.getItem(keys.plan)
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

async function setTimestamps(timeStamps: TimestampList) {
  console.dir(timeStamps)
  try {
    return await localforage.setItem(keys.timestamp, timeStamps)
  } catch (err) {
    console.error(err)
  }
}

async function getTimestamps() {
  try {
    const value = await localforage.getItem(keys.timestamp)

    return value as TimestampList
  } catch (err) {
    console.error(err)
  }
}

function resetAll() {
  localforage.clear()
}

const service = {
  getPlan,
  setPlan,
  setTasks,
  getTasks,
  setEstimation,
  getEstimation,
  setTimestamps,
  getTimestamps,
  resetAll,
}

export default service
