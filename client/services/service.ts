import localforage from 'localforage'
import { type Task } from '../types/types'

const tasksKey = 'tasks'
const planKey = 'plan'
const estimationKey = 'estimationKey'
const timerKey = 'timer'

async function setPlan(plan: string) {
  try {
    return await localforage.setItem(planKey, plan)
  } catch (err) {
    console.log(err)
  }
}

async function getPlan() {
  try {
    const value = await localforage.getItem(planKey)
    return value as string
  } catch (err) {
    console.log(err)
  }
}

async function setTasks(tasks: Task[]) {
  try {
    return await localforage.setItem(tasksKey, tasks)
  } catch (err) {
    console.log(err)
  }
}

async function getTasks() {
  try {
    const value = await localforage.getItem(tasksKey)
    return value as Task[]
  } catch (err) {
    console.log(err)
  }
}

async function setEstimation(interval: number) {
  try {
    return await localforage.setItem(estimationKey, interval)
  } catch (err) {
    console.log(err)
  }
}

async function getEstimation() {
  try {
    const value = await localforage.getItem(estimationKey)

    return value as number
  } catch (err) {
    console.log(err)
  }
}

async function setTimer(interval: number) {
  try {
    return await localforage.setItem(timerKey, interval)
  } catch (err) {
    console.log(err)
  }
}

async function getTimer() {
  try {
    const value = await localforage.getItem(timerKey)

    return value as number
  } catch (err) {
    console.log(err)
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
  setTimer,
  getTimer,
  resetAll,
}

export default service
