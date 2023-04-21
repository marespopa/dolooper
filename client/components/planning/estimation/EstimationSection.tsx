import React from 'react'
import { ESTIMATION_CONFIG } from 'utils/constants'
import { formatTimeFromMinutes } from 'utils/functions'
import SectionHeading from '../common/SectionHeading.component'
import TimeSelector from '@/components/forms/input/TimeSelector/TimeSelector'

interface Props {
  countdownInterval: number
  handleTimeChange: (_value: string) => void
}

const EstimationSection = ({ countdownInterval, handleTimeChange }: Props) => {
  const formattedTime = {
    selected: formatTimeFromMinutes(countdownInterval),
    min: formatTimeFromMinutes(ESTIMATION_CONFIG.min),
    max: formatTimeFromMinutes(ESTIMATION_CONFIG.max),
  }

  return (
    <section>
      <SectionHeading
        title="Estimation"
        description="Having this layed out, how long will it take?"
        subHeading="Time-boxing can help you fight procrastination, reclaim lost productivity, and focus on the work that matters."
      />
      <div className="mb-3">
        <div className={`relative z-0 md:w-1/2 min-h-full`}>
          <TimeSelector
            name="timer"
            label={{
              min: formattedTime.min,
              title: formattedTime.selected,
              max: formattedTime.max,
            }}
            value={countdownInterval}
            config={{
              min: ESTIMATION_CONFIG.min,
              max: ESTIMATION_CONFIG.max,
              step: ESTIMATION_CONFIG.step,
            }}
            action={handleTimeChange}
          />
        </div>
      </div>
    </section>
  )
}

export default EstimationSection
