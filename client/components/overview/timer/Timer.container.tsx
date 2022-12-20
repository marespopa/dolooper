import { useEffect, useMemo, useState } from 'react'
import { MINUTE, SECOND } from '../../../utils/constants'
import { formatTime } from '../../../utils/functions'
import Seo, { defaultMeta } from '../../Seo'
import TimerComponent from './Timer.component'
import { MIN_TIME_FOR_EXTENSION } from '../../../utils/constants'
interface Props {
  deadline: string
  handleTimeAdd: () => void
}

export const Timer = ({
  deadline = new Date().toString(),
  handleTimeAdd,
}: Props) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline])
  const [isNotificationShown, setIsNotificationShown] = useState(false)
  const [timeLeft, setTimeLeft] = useState(parsedDeadline - Date.now())

  useEffect(() => {
    const interval = setInterval(
      () => setTimeLeft(parsedDeadline - Date.now()),
      1000,
    )

    return () => clearInterval(interval)
  }, [parsedDeadline])

  useEffect(() => {
    if (!isNotificationShown && timeLeft <= 0) {
      triggerNotification()
      setIsNotificationShown(true)
    }
  }, [timeLeft, isNotificationShown])

  function triggerNotification() {
    navigator.serviceWorker.register('sw.js')
    Notification.requestPermission(function (result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification('Focus time has expired.')
        })
      }
    })
  }

  function getTimerValue(value: number) {
    if (value <= 0) {
      return '00'
    }

    return formatTime(value)
  }

  const minutesLeft = formatTime((timeLeft / MINUTE) % 60)
  const secondsLeft = formatTime((timeLeft / SECOND) % 60)

  const pageTitle =
    timeLeft < 0
      ? 'Time Expired - Devxloper'
      : `(${minutesLeft}:${secondsLeft}) - Devxloper`

  const needMoreTimeNotification = (
    <div className="mb-2 p-4 bg-blue-100 flex">
      <span className="text-xs">
        {`Need more time? `}
        <button className="text-gray-800 underline" onClick={handleTimeAdd}>
          Add 15 more minutes
        </button>
      </span>
    </div>
  )

  return (
    <>
      <Seo title={pageTitle} />
      {timeLeft < MIN_TIME_FOR_EXTENSION && needMoreTimeNotification}
      <TimerComponent timeLeft={timeLeft}></TimerComponent>
    </>
  )
}
