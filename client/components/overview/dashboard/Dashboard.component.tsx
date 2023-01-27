import React from 'react'
import { STATUSES } from '../../../utils/constants'
import { formatTimeFromMinutes } from '../../../utils/functions'
import DashboardEntry from './dashboard-entry/DashboardEntry'

interface Props {
  status: string
  currentTime: string
  totalWorkTime: string | null
  initialEstimation: number
  lastBreak: string | null
  lastWork: string | null
}

const Dashboard = ({
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
        <DashboardEntry
          variant="blue"
          title={'Working since'}
          text={`${lastWork}`}
          subtitle={'Keep the focus.'}
        />
        <DashboardEntry
          variant="gray"
          title={'Last break'}
          text={`${lastBreak}`}
          subtitle={'The last time you took a pause'}
        />
      </>
    ) : (
      <DashboardEntry
        variant="green"
        title={'Break since'}
        text={`${lastBreak}`}
        subtitle={'Taking a breather, are we?'}
      />
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-2 w-full">
      <DashboardEntry
        variant="amber"
        title={'Current time'}
        text={`${currentTime}`}
      />
      {stateDashboardEntry()}

      {hasWorkedTime && (
        <DashboardEntry
          variant="gray"
          title={'Worked time'}
          text={totalWorkTime}
          subtitle={'Total clocked time for this task'}
        />
      )}
      <DashboardEntry
        variant="gray"
        title={'Estimated at'}
        text={estimationText}
        subtitle={'Initial estimation for this task'}
      />
    </div>
  )
}

export default Dashboard
