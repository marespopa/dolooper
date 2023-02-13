import React from 'react'
import WorkManager from '../../../services/workManager'
import { TimestampList } from '../../../types/types'
import Dashboard from './Dashboard.component'

interface Props {
  initialEstimation: number
  timestampList: TimestampList
}

const DashboardContainer = ({ initialEstimation, timestampList }: Props) => {
  const totalWorkTime = WorkManager.getTotalWorkTime(timestampList)
  const lastBreak = WorkManager.getLastBreak(timestampList)
  const lastWork = WorkManager.getLastWorkEnd(timestampList)
  const status = WorkManager.getStatus(timestampList)

  const dashboardProps = {
    status,
    initialEstimation,
    totalWorkTime,
    lastBreak,
    lastWork,
  }

  return <Dashboard {...dashboardProps} />
}

export default DashboardContainer
