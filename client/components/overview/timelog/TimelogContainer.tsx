import moment from 'moment'
import React, { useState } from 'react'
import { Timestamp, TimestampList, TimestampType } from '../../../types/types'
import { boxStyles } from '../../common/common'
import ButtonText from '../../forms/buttons/ButtonText'
import Seo, { defaultMeta } from '../../Seo'
import TimeEntry from './TimeEntry'

interface Props {
  initialEstimation: number
  timestampList: TimestampList
  actions: {
    onAdd: (entry: TimestampType) => void
    onDelete: (entryKey: string) => void
  }
}

const Timelog = ({ initialEstimation, timestampList, actions }: Props) => {
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
      console.log(breakEntries[i].value - workEntries[i].value)
      diffTime += breakEntries[i].value - workEntries[i].value
    }

    var duration = moment.duration(diffTime)
    const timeFormat = {
      hrs: duration.hours(),
      mins: duration.minutes(),
    }

    return `${timeFormat.hrs}h ${timeFormat.mins}m logged`
  }

  function handleTimeEntryAdd() {
    if (timestampList.length === 0) {
      return actions.onAdd('work')
    }

    const currentType = timestampList[timestampList.length - 1].type
    const nextType = currentType === 'break' ? 'work' : 'break'

    return actions.onAdd(nextType)
  }
  const totalWorkTime = getTotalWorkTime()

  const pageTitle = formatPageTitle()

  return (
    <>
      <Seo title={pageTitle} />
      <div
        className={`${boxStyles} flex flex-col items-center justify-center px-2 md:px-4 py-5 my-5`}
      >
        <span className="mt-4 mb-2 text-xs">
          Initial estimation was {initialEstimation} minutes.
        </span>
        {timestampList.length > 0 && (
          <>
            <div className="bg-gray-100 my-2 overflow-x-auto">
              <table className="items-center w-full border-collapse">
                <tbody>
                  {timestampList.map((timeEntry) => {
                    return (
                      <TimeEntry
                        key={timeEntry.id}
                        type={timeEntry.type}
                        value={timeEntry.value}
                        action={() => actions.onDelete(timeEntry.id)}
                      />
                    )
                  })}
                </tbody>
              </table>
            </div>
            <span className="my-2 text-xs">{totalWorkTime}</span>
          </>
        )}
        <div className="text-center">
          <ButtonText
            action={() => handleTimeEntryAdd()}
            text="Punch timer"
          ></ButtonText>
        </div>
      </div>
    </>
  )
}

export default Timelog
8
