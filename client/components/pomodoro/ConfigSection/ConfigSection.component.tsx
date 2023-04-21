import React from 'react'
import { POMODORO_CONFIG } from 'utils/constants'
import TimeSelector from '../../forms/input/TimeSelector/TimeSelector'

type Props = {
  workTime: number
  breakTime: number
  actions: {
    handleWorkTimeChange: (_v: string) => void
    handleBreakTimeChange: (_v: string) => void
  }
}

const PomodoroConfigSection = ({ workTime, breakTime, actions }: Props) => {
  return (
    <div className="mt-2 bg-white p-4 dark:bg-gray-500 dark:text-white transition-all duration-150 ease-in-out w-full">
      <div>
        <h3>Work Time: {`${workTime}m`}</h3>
        <TimeSelector
          name="workTimeTimer"
          label={{
            min: `${POMODORO_CONFIG.workTime.min}`,
            max: `${POMODORO_CONFIG.workTime.max}`,
          }}
          value={workTime}
          config={{
            min: POMODORO_CONFIG.workTime.min,
            max: POMODORO_CONFIG.workTime.max,
            step: POMODORO_CONFIG.workTime.step,
          }}
          action={actions.handleWorkTimeChange}
        />
      </div>

      <div className="my-3">
        <h3>Break Time: {`${breakTime}m`}</h3>
        <TimeSelector
          name="breakTimeTimer"
          label={{
            min: `${POMODORO_CONFIG.breakTime.min}`,
            max: `${POMODORO_CONFIG.breakTime.max}`,
          }}
          value={breakTime}
          config={{
            min: POMODORO_CONFIG.breakTime.min,
            max: POMODORO_CONFIG.breakTime.max,
            step: POMODORO_CONFIG.breakTime.step,
          }}
          action={actions.handleBreakTimeChange}
        />
      </div>
    </div>
  )
}

export default PomodoroConfigSection
