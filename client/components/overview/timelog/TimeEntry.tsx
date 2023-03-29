import React from 'react'
import { TimestampType } from 'types/types'
import { formatTimeFromDate } from 'utils/functions'

interface Props {
  type: TimestampType
  value: Date
}
const TimeEntry = ({ type, value }: Props) => {
  const time = formatTimeFromDate(value)
  const messageByType = type === 'work' ? 'Session started' : 'Session Ended'
  return (
    <tr>
      <td className={tableCellStyle}>{`${time}`} </td>
      <td className={tableCellStyle}>{`${messageByType}`}</td>
    </tr>
  )
}

const tableCellStyle = `border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4`

export default TimeEntry
