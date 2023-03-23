import React from 'react'
import { STATUSES } from '@/utils/constants'
import { formatTimeFromMinutes } from '@/utils/functions'
import DashboardEntry from './DashboardEntry'

interface Props {
  status: string
  totalWorkTime: string | null
  initialEstimation: number
  lastBreak: string | null
  lastWork: string | null
}

const Dashboard = ({
  status,
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
        <DashboardEntry text={`Haven't took a break since ${lastBreak}`} />
        <DashboardEntry text={`Been working since ${lastWork}`} />
      </>
    ) : (
      <DashboardEntry text={`Taking a breather since ${lastBreak}`} />
    )
  }

  return (
    <div className="bg-gray-100 rounded-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 mt-4">
      {stateDashboardEntry()}
      {hasWorkedTime && (
        <DashboardEntry
          text={`You've clocked ${totalWorkTime} for this issue`}
        />
      )}
      <DashboardEntry text={`Initial estimation was ${estimationText}`} />
    </div>
  )
}

export default Dashboard
