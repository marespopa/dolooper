import { differenceInMilliseconds } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { TimestampList, TimestampType } from '../../../types/types'
import { STATUSES } from '../../../utils/constants'
import { formatTimeFromDate, formatTimeFromMS } from '../../../utils/functions'
import { boxStyles } from '../../common/common'
import ButtonDark from '../../forms/buttons/ButtonDark'
import Seo from '../../Seo'
import Dashboard from './Dashboard.component'

interface Props {
  initialEstimation: number
  timestampList: TimestampList
  actions: {
    onAdd: (_entry: TimestampType) => void
  }
}

const DashboardContainer = ({
  initialEstimation,
  timestampList,
  actions,
}: Props) => {
  const totalWorkTime = getTotalWorkTime()
  const pageTitle = formatPageTitle()
  const lastBreak = getLastBreak(timestampList)
  const lastWork = getLastWorkEnd(timestampList)
  const status = getStatus(timestampList)
  const [currentTime, setCurrentTime] = useState('')
  const isWorking = status === STATUSES.work
  const actionButtonText = isWorking ? 'Take a break' : 'Start working'
  const dashboardProps = {
    currentTime,
    status,
    initialEstimation,
    totalWorkTime,
    lastBreak,
    lastWork,
  }
  useEffect(() => {
    var timer = setInterval(
      () => setCurrentTime(formatTimeFromDate(new Date())),
      1000,
    )
    return function cleanup() {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <Seo title={pageTitle} />
      <div className={`${boxStyles} px-2 md:px-4 py-5 mb-8`}>
        <div className="text-center mt-4 mb-8">
          <ButtonDark
            action={() => handleTimeEntryAdd()}
            text={actionButtonText}
          ></ButtonDark>
        </div>
        <Dashboard {...dashboardProps} />
      </div>
    </>
  )

  function formatPageTitle() {
    return `Work - Doloper`
  }

  function getStatus(list: TimestampList) {
    if (!list || list.length === 0) {
      return STATUSES.none
    }

    return list[list.length - 1].type === 'break'
      ? STATUSES.break
      : STATUSES.work
  }

  function getTotalWorkTime() {
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

  function handleTimeEntryAdd() {
    if (timestampList.length === 0) {
      return actions.onAdd('work')
    }

    const currentType = timestampList[timestampList.length - 1].type
    const nextType = currentType === 'break' ? 'work' : 'break'

    return actions.onAdd(nextType)
  }
}

export default DashboardContainer
