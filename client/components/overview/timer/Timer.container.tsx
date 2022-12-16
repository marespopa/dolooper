import { useEffect, useMemo, useState } from 'react'
import { MINUTE, SECOND } from '../../../utils/constants'
import { formatTime } from '../../../utils/functions'
import Seo, { defaultMeta } from '../../Seo'
import TimerComponent from './Timer.component'

export const Timer = ({ deadline = new Date().toString() }) => {
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
    new Notification('Focus time has expired.')
  }

  function getTimerValue(value: number) {
    if (value <= 0) {
      return '00'
    }

    return formatTime(value)
  }

  const minutesLeft = formatTime((timeLeft / MINUTE) % 60)
  const secondsLeft = formatTime((timeLeft / SECOND) % 60)

  const pageTitle = `(${minutesLeft}:${secondsLeft})`

  return (
    <>
      <Seo title={pageTitle} />
      <TimerComponent timeLeft={timeLeft}></TimerComponent>
    </>
  )
}
