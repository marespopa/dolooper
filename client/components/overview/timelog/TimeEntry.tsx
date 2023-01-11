import React from 'react'
import { TimestampType } from '../../../types/types'
import { formatTimeFromMS } from '../../../utils/functions'
import ButtonCircle from '../../forms/buttons/ButtonCircle'

interface Props {
  type: TimestampType
  value: number
  action: () => void
}
const TimeEntry = ({ type, value, action }: Props) => {
  const time = formatTimeFromMS(value)
  const messageByType = type === 'work' ? 'Work Start' : 'Work End'
  return (
    <tr>
      <td className={tableCellStyle}>{`${time}`} </td>
      <td className={tableCellStyle}>{`${messageByType}`}</td>
      <td className={tableCellStyle}>
        <ButtonCircle text="x" action={action}></ButtonCircle>
      </td>
    </tr>
  )
}

const tableCellStyle = `border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4`

export default TimeEntry
