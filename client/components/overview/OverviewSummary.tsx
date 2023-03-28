import React, { useState } from 'react'
import { TimestampList } from '../../types/types'
import ButtonLink from '../forms/buttons/ButtonLink'
import DashboardContainer from './dashboard'
import Timelog from './timelog/Timelog.component'

type Props = {
  estimation: number
  entries: TimestampList
  isLoading: boolean
}

const OverviewSummary = ({ entries, estimation, isLoading }: Props) => {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false)

  const showTimeline = () => {
    setIsTimelineVisible(!isTimelineVisible)
  }

  return (
    <div className="cursor-pointer" onClick={showTimeline}>
      <span>{`Want to see a summary of your progress on this task? `}</span>
      <ButtonLink text="Click here" action={showTimeline}></ButtonLink>
      {isTimelineVisible && (
        <>
          {!isLoading && (
            <DashboardContainer
              initialEstimation={estimation}
              timestampList={entries}
            />
          )}
          <Timelog timestampList={entries} />
        </>
      )}
    </div>
  )
}

export default OverviewSummary
