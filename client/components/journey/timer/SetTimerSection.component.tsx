import React from 'react'
import { boxStyles } from '../../common/common'
import SectionHeading from '../common/SectionHeading.component'

interface Props {
  countdownInterval: number
  handleTimeChange: (value: string) => void
}

const SetTimerSection = ({ countdownInterval, handleTimeChange }: Props) => {
  const sessionLength = {
    min: 30,
    max: 60 * 2,
    step: 15,
  } //minutes

  return (
    <section className="mt-10">
      <SectionHeading
        title="Duration"
        description="Having this layed out, how long will it take?"
      />
      <div className="mb-3">
        <div className={`${boxStyles} px-6 py-3 w-full md:w-1/2 min-h-full`}>
          <div className="price-range">
            <span className="text-strong">{countdownInterval} minutes</span>
            <input
              id="timer"
              type="range"
              min={sessionLength.min}
              max={sessionLength.max}
              value={countdownInterval}
              step={sessionLength.step}
              placeholder="30"
              onChange={(e) => handleTimeChange(e.target.value)}
              className="w-full accent-gray-800"
            />
            <div className="-mt-2 flex w-full justify-between">
              <span className="text-sm text-gray-400">
                {sessionLength.min}m
              </span>
              <span className="text-sm text-gray-400">
                {sessionLength.max}m
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SetTimerSection
