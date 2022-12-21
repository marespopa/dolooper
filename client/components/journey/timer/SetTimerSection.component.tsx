import moment from 'moment'
import React, { useState } from 'react'
import service from '../../../services/service'
import Input from '../../forms/input/Input.component'
import SectionHeading from '../common/SectionHeading.component'

interface Props {
  time: number
  handleTimeChange: (value: string) => void
}

const SetTimerSection = ({ time, handleTimeChange }: Props) => {
  const sessionLength = {
    min: 30,
    max: 60 * 2,
    step: 15,
  } //minutes

  return (
    <section className="mt-10">
      <SectionHeading
        title="Duration"
        description="Having this layed out, how long will this session last?"
      />
      <div className="mb-3">
        <div className="w-full md:w-1/2">
          <div className="price-range">
            <span className="text-strong">{time} minutes</span>
            <input
              id="timer"
              type="range"
              min={sessionLength.min}
              max={sessionLength.max}
              value={time}
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
