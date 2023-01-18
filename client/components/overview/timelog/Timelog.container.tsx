import React, { useState } from 'react'
import { TimestampList } from '../../../types/types'
import ButtonLink from '../../forms/buttons/ButtonLink'
import Timelog from './Timelog.component'

type Props = {
  entries: TimestampList
}

const TimelogContainer = ({ entries }: Props) => {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false)

  return (
    <>
      <ButtonLink
        text="Click here"
        action={() => setIsTimelineVisible(!isTimelineVisible)}
      ></ButtonLink>
      {isTimelineVisible && <Timelog timestampList={entries} />}
    </>
  )
}

export default TimelogContainer
