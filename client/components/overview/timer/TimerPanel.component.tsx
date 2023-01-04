import React from 'react'

type ParsedTime = {
  hours: string
  minutes: string
  seconds: string
}

interface Props {
  parsedTime: ParsedTime
}

const TimerPanel = ({ parsedTime }: Props) => {
  return (
    <div className="text-6xl text-center flex w-full items-center justify-center mb-2">
      <div key={'Hours'} className="w-24 mx-1 p-2 text-gray-700 rounded-lg">
        <div className="font-mono leading-none" x-text="days">
          {parsedTime.hours}
        </div>
        <div className="font-mono uppercase text-sm leading-none">Hours</div>
      </div>
      <div key={'Minutes'} className="w-24 mx-1 p-2 text-gray-700 rounded-lg">
        <div className="font-mono leading-none" x-text="min">
          {parsedTime.minutes}
        </div>
        <div className="font-mono uppercase text-sm leading-none">Minutes</div>
      </div>
      <div key={'Seconds'} className="w-24 mx-1 p-2 text-gray-700 rounded-lg">
        <div className="font-mono leading-none" x-text="sec">
          {parsedTime.seconds}
        </div>
        <div className="font-mono uppercase text-sm leading-none">Seconds</div>
      </div>
    </div>
  )
}

export default TimerPanel
