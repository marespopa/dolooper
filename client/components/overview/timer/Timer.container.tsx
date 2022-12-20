import { useEffect, useMemo, useState } from 'react'
import { MINUTE, SECOND } from '../../../utils/constants'
import Seo, { defaultMeta } from '../../Seo'
import TimerComponent from './Timer.component'
import { MIN_TIME_FOR_EXTENSION } from '../../../utils/constants'
import { toast } from 'react-toastify'
import { useCountdown } from '../../../hooks/useCountdown'
import moment from 'moment'
interface Props {
  deadline: string
  handleTimeAdd: (timeleft: number) => void
}

export const Timer = ({
  deadline = new Date().toString(),
  handleTimeAdd,
}: Props) => {
  const parsedDeadline = useMemo(() => new Date(deadline), [deadline])
  const [isNotificationShown, setIsNotificationShown] = useState(false)
  const timeLeft = useCountdown(parsedDeadline)

  //TODO Refactor the way a notification is shown again.
  useEffect(() => {
    if (!isNotificationShown && timeLeft.time <= 0) {
      triggerNotification()
    }
  }, [timeLeft, isNotificationShown])

  useEffect(() => {
    if (timeLeft.time > 0) {
      setIsNotificationShown(false)
    }
  }, [timeLeft])

  function triggerNotification() {
    toast.error('Time is up!')
    setIsNotificationShown(true)
  }

  const pageTitle =
    timeLeft.time <= 0
      ? 'Time Expired - Devxloper'
      : `(${timeLeft.parsed.minutes}:${timeLeft.parsed.seconds}) - Devxloper`

  const needMoreTimeNotification = (
    <div className="mb-2 p-4 bg-blue-100 flex">
      <span className="text-xs">
        {`Need more time? `}
        <button
          className="text-gray-800 underline"
          onClick={() => handleTimeAdd(timeLeft.time)}
        >
          Add 15 more minutes
        </button>
      </span>
    </div>
  )

  return (
    <>
      <Seo title={pageTitle} />
      {timeLeft.time < MIN_TIME_FOR_EXTENSION && needMoreTimeNotification}
      <TimerComponent timeLeft={timeLeft}></TimerComponent>
    </>
  )
}
