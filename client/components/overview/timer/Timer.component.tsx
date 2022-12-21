import { CountdownData } from '../../../hooks/useCountdown'
import { HOUR, MINUTE, SECOND } from '../../../utils/constants'

interface Props {
  timeLeft: CountdownData
}

const TimerComponent = ({ timeLeft }: Props) => {
  const deadlineToString = Object.entries(timeLeft.parsed)

  function getTimerValue(value: number) {
    if (value <= 0) {
      return '00'
    }

    return `${Math.floor(value)}`.padStart(2, '0')
  }

  return (
    <div className="bg-white flex items-center justify-center px-5 py-5 my-5 rounded">
      <h1 className="text-3xl text-center mb-3 font-extralight">
        {`Let's execute!`}
      </h1>
      <div className="text-6xl text-center flex w-full items-center justify-center">
        <div className="text-2xl mr-1 font-extralight">Time left:</div>
        {deadlineToString.map(([label, value]) => {
          return (
            <div
              key={label}
              className="w-24 mx-1 p-2 bg-white text-gray-700 rounded-lg"
            >
              <div className="font-mono leading-none" x-text="days">
                {value}
              </div>
              <div className="font-mono uppercase text-sm leading-none">
                {label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TimerComponent
