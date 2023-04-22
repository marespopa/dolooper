import React from 'react'
import { POMODORO_CONFIG } from 'utils/constants'
import TimeSelector from '../../forms/input/TimeSelector/TimeSelector'

type Props = {
  timer: number
  handleTimeChange: (_v: string) => void
}

const PomodoroConfigSection = ({ timer, handleTimeChange }: Props) => {
  return (
    <div className="mt-2 bg-white p-4 dark:bg-gray-500 dark:text-white transition-all duration-150 ease-in-out w-full">
      <div>
        <h3>Timer: {`${timer}m`}</h3>
        <TimeSelector
          name="Timer"
          label={{
            min: `${POMODORO_CONFIG.min}`,
            max: `${POMODORO_CONFIG.max}`,
          }}
          value={timer}
          config={{
            min: POMODORO_CONFIG.min,
            max: POMODORO_CONFIG.max,
            step: POMODORO_CONFIG.step,
          }}
          action={handleTimeChange}
        />
      </div>
    </div>
  )
}

export default PomodoroConfigSection
