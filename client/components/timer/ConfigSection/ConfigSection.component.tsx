import React from 'react'
import { TIMER_CONFIG } from 'utils/constants'
import TimeSelector from '../../forms/input/TimeSelector/TimeSelector'

type Props = {
  timer: number
  handleTimeChange: (_v: string) => void
}

const TimerConfigSection = ({ timer, handleTimeChange }: Props) => {
  return (
    <div className="mt-2 bg-white p-4 dark:bg-gray-500 dark:text-white transition-all duration-150 ease-in-out w-full">
      <div>
        <h3>
          Set timer for <span className="font-bold">{`${timer}m`}</span>
        </h3>
        <TimeSelector
          name="Timer"
          label={{
            min: `${TIMER_CONFIG.min}`,
            max: `${TIMER_CONFIG.max}`,
          }}
          value={timer}
          config={{
            min: TIMER_CONFIG.min,
            max: TIMER_CONFIG.max,
            step: TIMER_CONFIG.step,
          }}
          action={handleTimeChange}
        />
      </div>
    </div>
  )
}

export default TimerConfigSection
