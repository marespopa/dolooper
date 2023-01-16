import moment, { Moment } from 'moment'
import React from 'react'
import { TimestampList, TimestampType } from '../../../types/types'
import { formatTimeFromMS } from '../../../utils/functions'
import { boxStyles } from '../../common/common'
import ButtonText from '../../forms/buttons/ButtonText'
import Seo from '../../Seo'
import Dashboard from './dashboard/Dashboard'
import Greeting from './greeting/Greeting.component'
import TimelogComponent from './Timelog.component'

interface Props {
  initialEstimation: number
  timestampList: TimestampList
  actions: {
    onAdd: (entry: TimestampType) => void
  }
}

const Timelog = ({ initialEstimation, timestampList, actions }: Props) => {
  const totalWorkTime = getTotalWorkTime()
  const pageTitle = formatPageTitle()
  const lastBreak = getLastBreak(timestampList)

  return (
    <>
      <Seo title={pageTitle} />
      <div className={`${boxStyles} px-2 md:px-4 py-5 my-5`}>
        <Greeting />
        <Dashboard
          initialEstimation={initialEstimation}
          totalWorkTime={totalWorkTime}
          lastBreak={lastBreak}
        />

        {timestampList.length > 0 && (
          <TimelogComponent timestampList={timestampList} />
        )}
        <div className="text-center mt-4">
          <ButtonText
            action={() => handleTimeEntryAdd()}
            text="Punch timer"
          ></ButtonText>
        </div>
      </div>
    </>
  )

  function formatPageTitle() {
    return `Work - Devxloper`
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
      diffTime += breakEntries[i].value - workEntries[i].value
    }

    var duration = moment.duration(diffTime)
    const timeFormat = {
      day: duration.days(),
      hrs: duration.hours(),
      mins: duration.minutes(),
    }

    const dayString = timeFormat.day > 0 ? `${timeFormat.day}d ` : ''

    return `${dayString}${timeFormat.hrs}h ${timeFormat.mins}m`
  }

  function getLastBreak(timestampList: TimestampList) {
    let sortedArray = timestampList
      .filter((time) => time.type === 'break')
      .sort((a, b) => a.value.valueOf() - b.value.valueOf())

    if (sortedArray.length === 0) {
      return 'None yet'
    }

    return formatTimeFromMS(sortedArray[sortedArray.length - 1].value)
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

export default Timelog
