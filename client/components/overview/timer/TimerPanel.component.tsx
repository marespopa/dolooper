import React from 'react'

type ParsedTime = {
  hours: string
  minutes: string
  seconds: string
}

interface Props {
  parsedTime: ParsedTime
  isRunning: boolean
}

const TimerPanel = ({ parsedTime, isRunning }: Props) => {
  return (
    <div className="text-6xl text-center flex w-full items-center justify-center mb-2">
      <div key={'Hours'} className={digitStyle(isRunning)}>
        <div className="font-mono leading-none" x-text="days">
          {parsedTime.hours}
        </div>
        <div className="font-mono uppercase text-sm leading-none">Hours</div>
      </div>
      <div key={'Minutes'} className={digitStyle(isRunning)}>
        <div className="font-mono leading-none" x-text="min">
          {parsedTime.minutes}
        </div>
        <div className="font-mono uppercase text-sm leading-none">Minutes</div>
      </div>
      <div key={'Seconds'} className={digitStyle(isRunning)}>
        <div className="font-mono leading-none" x-text="sec">
          {parsedTime.seconds}
        </div>
        <div className="font-mono uppercase text-sm leading-none">Seconds</div>
      </div>
    </div>
  )
}

const digitStyle = (isTimerRunning: boolean) => {
  const textColor = isTimerRunning ? 'text-gray-700' : 'text-gray-400'

  return `w-24 mx-1 p-2 ${textColor} rounded-lg`
}

export default TimerPanel
