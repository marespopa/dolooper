import { useEffect, useState } from 'react'
import Seo, { defaultMeta } from '../../Seo'
import TimerComponent from './Timer.component'
import { MINUTE, MIN_TIME_FOR_EXTENSION } from '../../../utils/constants'
import { toast } from 'react-toastify'
import { useCountdown } from '../../../hooks/useCountdown'
import { getFormattedTime } from '../../../utils/functions'
import Alert from '../../banners/Alert'
interface Props {
  initialEstimation: number
}

export const Timer = ({ initialEstimation = 30 }: Props) => {
  const [isNotificationShown, setIsNotificationShown] = useState(false)
  const countdownTimer = useCountdown(initialEstimation * 60)

  //TODO Refactor the way a notification is shown again.
  useEffect(() => {
    if (!isNotificationShown && countdownTimer.counter <= 0) {
      triggerNotification()
    }
  }, [countdownTimer.counter, isNotificationShown])

  useEffect(() => {
    if (countdownTimer.counter > 0) {
      setIsNotificationShown(false)
    }
  }, [countdownTimer.counter])

  function triggerNotification() {
    toast.error('Time is up!')
    setIsNotificationShown(true)
  }

  function formatPageTitle(timeLeftInSeconds: number) {
    if (timeLeftInSeconds <= 0) {
      return 'Time Expired - Devxloper'
    }

    const timeAsObject = getFormattedTime(countdownTimer.counter)
    const hoursSpace =
      timeAsObject.numeric.hours > 0 ? `${timeAsObject.parsed.hours}:` : ''

    return `${hoursSpace}${timeAsObject.parsed.minutes}:${timeAsObject.parsed.seconds} - Devxloper`
  }

  const pageTitle = formatPageTitle(countdownTimer.counter)

  const needMoreTimeNotification = (
    <Alert style="info">
      <span className="text-xs">
        {`Need more time? `}
        <button
          className="text-gray-800 underline"
          onClick={() => countdownTimer.extendWith(15 * MINUTE)}
        >
          Add 15 more minutes
        </button>
      </span>
    </Alert>
  )

  return (
    <>
      <Seo title={pageTitle} />
      {countdownTimer.counter < MIN_TIME_FOR_EXTENSION &&
        needMoreTimeNotification}
      <TimerComponent
        countdownTimer={countdownTimer}
        estimation={initialEstimation}
      ></TimerComponent>
    </>
  )
}
