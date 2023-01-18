import React from 'react'
import { SESSION_LENGTH } from '../../../utils/constants'
import { formatTimeFromMinutes } from '../../../utils/functions'
import { boxStyles } from '../../common/common'
import SectionHeading from '../common/SectionHeading.component'

interface Props {
  countdownInterval: number
  handleTimeChange: (_value: string) => void
}

const EstimationSection = ({ countdownInterval, handleTimeChange }: Props) => {
  const formattedTime = {
    selected: formatTimeFromMinutes(countdownInterval),
    min: formatTimeFromMinutes(SESSION_LENGTH.min),
    max: formatTimeFromMinutes(SESSION_LENGTH.max),
  }

  return (
    <section className="mt-10">
      <SectionHeading
        title="Estimation"
        description="Having this layed out, how long will it take?"
      />
      <div className="mb-3">
        <div className={`${boxStyles} px-6 py-3 w-full md:w-1/2 min-h-full`}>
          <div className="price-range">
            <span className="text-strong">{formattedTime.selected}</span>
            <input
              id="timer"
              type="range"
              min={SESSION_LENGTH.min}
              max={SESSION_LENGTH.max}
              value={countdownInterval}
              step={SESSION_LENGTH.step}
              placeholder={'Add time'}
              onChange={(e) => handleTimeChange(e.target.value)}
              className="w-full accent-gray-800"
            />
            <div className="-mt-2 flex w-full justify-between">
              <span className="text-sm text-gray-400">{formattedTime.min}</span>
              <span className="text-sm text-gray-400">{formattedTime.max}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EstimationSection
