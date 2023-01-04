import { CountdownData } from '../../../hooks/useCountdown'
import { getFormattedTime } from '../../../utils/functions'
import { boxStyles } from '../../common/common'
import ButtonText from '../../forms/buttons/ButtonText'
import TimerButtons from './TimerButtons.component'
import TimerPanel from './TimerPanel.component'

interface Props {
  countdownTimer: CountdownData
  estimation: number
}

const TimerComponent = ({ countdownTimer, estimation }: Props) => {
  const formattedTime = getFormattedTime(countdownTimer.counter)
  const timePanel =
    countdownTimer.counter > 0 ? (
      <TimerPanel parsedTime={formattedTime.parsed} />
    ) : (
      <div className="text-md text-center my-4">Time is up.</div>
    )

  return (
    <div
      className={`${boxStyles} flex flex-col items-center justify-center px-2 md:px-4 py-5 my-5`}
    >
      <div className="text-center"> {timePanel}</div>
      <div className="text-center">
        {countdownTimer && (
          <TimerButtons
            actions={{
              start: countdownTimer.start,
              pause: countdownTimer.pause,
              reset: countdownTimer.reset,
            }}
            isRunning={countdownTimer.isRunning}
          />
        )}
      </div>
      <span className="mt-4 text-xs text-gray-500">{`Your initial estimation was: ${estimation} minutes`}</span>
    </div>
  )
}

export default TimerComponent
