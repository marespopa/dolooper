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

  return (
    <>
      <ButtonLink
        text="Click here"
        action={() => setIsTimelineVisible(!isTimelineVisible)}
      ></ButtonLink>
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
    </>
  )
}

export default OverviewSummary
