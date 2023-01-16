import React from 'react'
import DashboardEntry from './DashboardEntry'

interface Props {
  totalWorkTime: string | null
  initialEstimation: number
  lastBreak: string | null
}

const Dashboard = ({ totalWorkTime, initialEstimation, lastBreak }: Props) => {
  const hasWorkedTime = !!totalWorkTime

  return (
    <div className="grid grid-cols-1 gap-2 my-2 w-full md:grid-cols-2">
      {hasWorkedTime && (
        <DashboardEntry
          variant="warning"
          title={'Worked time'}
          text={totalWorkTime}
          subtitle={'Total clocked time for this task'}
        />
      )}

      <DashboardEntry
        variant="info"
        title={'Estimated at'}
        text={`${initialEstimation} minutes`}
        subtitle={'Initial estimation for this task'}
      />

      <DashboardEntry
        variant="info"
        title={'Last break'}
        text={`${lastBreak}`}
        subtitle={'The last time you took a pause'}
      />
    </div>
  )
}

export default Dashboard
