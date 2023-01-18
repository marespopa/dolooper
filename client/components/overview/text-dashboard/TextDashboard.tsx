import React from 'react'
import { STATUSES } from '../../../utils/constants'
import { formatTimeFromMinutes } from '../../../utils/functions'
import TextDashboardEntry from './TextDashboardEntry'

interface Props {
  status: string
  currentTime: string
  totalWorkTime: string | null
  initialEstimation: number
  lastBreak: string | null
  lastWork: string | null
}

const TextDashboard = ({
  status,
  currentTime,
  totalWorkTime,
  initialEstimation,
  lastBreak,
  lastWork,
}: Props) => {
  const hasWorkedTime = !!totalWorkTime
  const estimationText = formatTimeFromMinutes(initialEstimation)
  const startedWorking = [STATUSES.break, STATUSES.work].includes(status)
  const isWorking = status === STATUSES.work

  const stateDashboardEntry = () => {
    if (!startedWorking) {
      return null
    }

    return isWorking ? (
      <>
        <TextDashboardEntry text={`Haven't took a break since ${lastBreak}`} />
        <TextDashboardEntry text={`Been working since ${lastWork}`} />
      </>
    ) : (
      <TextDashboardEntry text={`Taking a breather since ${lastBreak}`} />
    )
  }

  return (
    <div className="">
      <TextDashboardEntry text={`Currently it is ${currentTime}`} />

      {stateDashboardEntry()}
      {hasWorkedTime && (
        <TextDashboardEntry
          text={`You've clocked ${totalWorkTime} for this issue`}
        />
      )}
      <TextDashboardEntry text={`Initial estimation was ${estimationText}`} />
    </div>
  )
}

export default TextDashboard
