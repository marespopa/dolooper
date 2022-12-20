import { useEffect, useState } from 'react'
import { HOUR, MINUTE, SECOND, DAY } from '../utils/constants'

export type CountdownData = {
  time: number
  numeric: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
  parsed: {
    days: string
    hours: string
    minutes: string
    seconds: string
  }
}

export const useCountdown = (deadline: Date) => {
  // Time is in seconds
  const [time, setTime] = useState(computeTimeLeft(deadline))

  const decrement = () =>
    setTime((prevTime) => {
      return prevTime === 0 ? 0 : prevTime - 1000
    })

  useEffect(() => {
    const id = setInterval(decrement, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    setTime(computeTimeLeft(deadline))
  }, [deadline])

  function formatTime(value: number) {
    if (value <= 0) {
      return '00'
    }

    return `${Math.floor(value)}`.padStart(2, '0')
  }

  function computeTimeLeft(deadline: Date) {
    return Math.max(0, Math.floor(deadline.getTime() - Date.now()))
  }

  const numericData = {
    days: Math.floor(time / DAY),
    hours: Math.floor((time / HOUR) % 24),
    minutes: Math.floor((time / MINUTE) % 60),
    seconds: (time / SECOND) % 60,
  }

  const parsedData = {
    days: formatTime(numericData.days),
    hours: formatTime(numericData.hours),
    minutes: formatTime(numericData.minutes),
    seconds: formatTime(numericData.seconds),
  }

  const result: CountdownData = {
    time: time,
    numeric: numericData,
    parsed: parsedData,
  }

  return result
}
