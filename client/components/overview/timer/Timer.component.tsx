import { CountdownData } from '../../../hooks/useCountdown'
import { boxStyles } from '../../common/common'
import { HOUR, MINUTE, SECOND } from '../../../utils/constants'

interface Props {
  timeLeft: CountdownData
}

const TimerComponent = ({ timeLeft }: Props) => {
  const deadlineToString = Object.entries({
    hrs: timeLeft.parsed.hours,
    min: timeLeft.parsed.minutes,
    sec: timeLeft.parsed.seconds,
  })

  function getTimerValue(value: number) {
    if (value <= 0) {
      return '00'
    }

    return `${Math.floor(value)}`.padStart(2, '0')
  }

  return (
    <div
      className={`${boxStyles} flex flex-col md:flex-row items-center justify-center px-2 md:px-4 py-5 my-5`}
    >
      <h1 className="text-3xl text-center mb-3 font-extralight">
        {`Let's execute!`}
      </h1>
      <div className="text-6xl text-center flex w-full items-center justify-center">
        <span className="text-2xl mr-1 font-extralight hidden sm:inline">
          Time left:
        </span>
        {deadlineToString.map(([label, value]) => {
          return (
            <div key={label} className="w-24 mx-1 p-2 text-gray-700 rounded-lg">
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
