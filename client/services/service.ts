import localforage from 'localforage'
import { type Task } from '../types/types'

const tasksKey = 'tasks'
const planKey = 'plan'
const timerKey = 'deadline'

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

async function setDeadline(date: string) {
  try {
    return await localforage.setItem(timerKey, date)
  } catch (err) {
    console.log(err)
  }
}

async function getDeadline() {
  try {
    const value = await localforage.getItem(timerKey)

    return value as string
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
  setDeadline,
  getDeadline,
  resetAll,
}

export default service
