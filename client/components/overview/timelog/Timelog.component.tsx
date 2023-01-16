import React from 'react'
import { TimestampList } from '../../../types/types'
import TimeEntry from './TimeEntry'

interface Props {
  timestampList: TimestampList
}

const TimelogComponent = ({ timestampList }: Props) => {
  return (
    <div className="bg-gray-100 my-2 overflow-x-auto w-full sm:w-1/2 rounded-xl mx-auto">
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

const rowStyle = 'mt-4 mb-2 text-xs'

export default TimelogComponent
