import { TimestampList, TimestampType } from './../types/types.d'
import { STATUSES } from '../utils/constants'
import { differenceInMilliseconds } from 'date-fns'
import { formatTimeFromMS, formatTimeFromDate } from '../utils/functions'
import service from './service'

async function getTimeline() {
  return service.getTimestamps().then((results) => {
    if (results) {
      return results
    }

    return null
  })
}

function getStatus(list: TimestampList) {
  if (!list || list.length === 0) {
    return STATUSES.none
  }

  return list[list.length - 1].type === 'break' ? STATUSES.break : STATUSES.work
}

function getTotalWorkTime(timestampList: TimestampList) {
  let diffTime = 0
  const workEntries = timestampList.filter((entry) => entry.type === 'work')
  const breakEntries = timestampList.filter((entry) => entry.type === 'break')
  const minLength = Math.min(workEntries.length, breakEntries.length)

  if (minLength === 0) {
    return null
  }

  for (let i = 0; i <= minLength - 1; i++) {
    diffTime += differenceInMilliseconds(
      breakEntries[i].value,
      workEntries[i].value,
    )
  }

  const formattedTime = formatTimeFromMS(diffTime)

  return formattedTime
}

function getLastTimeEntryOfType(
  timestampList: TimestampList,
  type?: TimestampType,
) {
  const filteredArray = type
    ? timestampList
    : timestampList.filter((time) => time.type === type)

  const sortedArray = filteredArray.sort(
    (a, b) => a.value.valueOf() - b.value.valueOf(),
  )

  if (sortedArray.length === 0) {
    return 'None yet'
  }

  return formatTimeFromDate(sortedArray[sortedArray.length - 1].value)
}

function getLastWorkEnd(list: TimestampList) {
  if (list.length < 1) {
    return 'None yet'
  }

  return getLastTimeEntryOfType(list, 'break')
}

function getLastBreak(list: TimestampList) {
  if (list.length <= 1) {
    return 'None yet'
  }

  const lastWorkEnd = getLastTimeEntryOfType(list, 'work')
  return lastWorkEnd
}

const WorkManager = {
  getTimeline,
  getStatus,
  getTotalWorkTime,
  getLastBreak,
  getLastTimeEntryOfType,
  getLastWorkEnd,
}

export default WorkManager
