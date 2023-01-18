import React from 'react'
import { TimestampList } from '../../../types/types'
import TimeEntry from './TimeEntry'

interface Props {
  timestampList: TimestampList
}

const Timelog = ({ timestampList }: Props) => {
  return (
    <div className="bg-gray-100 my-2 overflow-x-auto w-full rounded-xl mx-auto">
      <table className="items-center w-full border-collapse">
        <tbody>
          {timestampList.map((timeEntry) => {
            return (
              <TimeEntry
                key={timeEntry.id}
                type={timeEntry.type}
                value={timeEntry.value}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Timelog
