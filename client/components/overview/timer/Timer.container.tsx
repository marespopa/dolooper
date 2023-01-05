import Seo, { defaultMeta } from '../../Seo'
import TimerComponent from './Timer.component'
import { useTimer } from '../../../hooks/useTimer'
import { getFormattedTime } from '../../../utils/functions'
interface Props {
  initialEstimation: number
  previousTime?: number
}

export const Timer = ({ initialEstimation = 30, previousTime = 0 }: Props) => {
  const countdownTimer = useTimer(previousTime)

  function formatPageTitle(timeLeftInSeconds: number) {
    const timeAsObject = getFormattedTime(timeLeftInSeconds)
    const hoursSpace =
      timeAsObject.numeric.hours > 0 ? `${timeAsObject.parsed.hours}:` : ''

    const message = `${hoursSpace}${timeAsObject.parsed.minutes}:${timeAsObject.parsed.seconds} - Devxloper`

    // Counter is not started
    if (countdownTimer.counter === 0) {
      return defaultMeta.title
    }

    // Counter is running
    if (countdownTimer.isRunning) {
      return message
    }

    // Counter is paused
    return `Paused - ${message}`
  }

  const pageTitle = formatPageTitle(countdownTimer.counter)

  return (
    <>
      <Seo title={pageTitle} />

      <TimerComponent
        countdownTimer={countdownTimer}
        estimation={initialEstimation}
      ></TimerComponent>
    </>
  )
}
