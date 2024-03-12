import localforage from 'localforage'

type TimeVariants = 'start' | 'work' | 'break'

const keys = {
  startTime: 'startTimeForTimer',
  workTime: 'workIntervalForTimer',
  breakTime: 'breakIntervalForTimer',
}

const timeKeyMap = {
  start: keys.startTime,
  break: keys.breakTime,
  work: keys.workTime,
}

async function setTime(variant: TimeVariants, timeInMs: number) {
  try {
    return await localforage.setItem(timeKeyMap[variant], timeInMs)
  } catch (err) {
    console.error(err)
  }
}

async function getTime(variant: TimeVariants) {
  try {
    const value = await localforage.getItem(timeKeyMap[variant])
    return value as number
  } catch (err) {
    console.error(err)
  }
}

async function removeTime(variant: TimeVariants) {
  try {
    return await localforage.removeItem(timeKeyMap[variant])
  } catch (err) {
    console.error(err)
  }
}

const StorageService = {
  setTime,
  getTime,
  removeTime,
}

export default StorageService
