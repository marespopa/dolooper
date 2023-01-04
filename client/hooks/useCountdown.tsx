import { useEffect, useRef, useState } from 'react'

export type CountdownData = {
  counter: number
  start: () => void
  pause: () => void
  reset: () => void
  isRunning: boolean
}

export const useCountdown = (total: number, ms: number = 1000) => {
  const [counter, setCountDown] = useState(total)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  // Store the created interval
  const intervalId = useRef<number>()
  const start: () => void = () => setIsTimerRunning(true)
  const pause: () => void = () => setIsTimerRunning(false)
  const reset: () => void = () => {
    clearInterval(intervalId.current)
    setIsTimerRunning(false)
    setCountDown(total)
  }

  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      isTimerRunning && counter > 0 && setCountDown((counter) => counter - 1)
    }, ms)
    // Clear interval when count to zero
    if (counter === 0) clearInterval(intervalId.current)
    // Clear interval when unmount
    return () => clearInterval(intervalId.current)
  }, [isTimerRunning, counter, ms])

  const extendWith = (interval: number) => {
    setCountDown(counter + interval)
  }

  const timer = {
    counter,
    start,
    pause,
    reset,
    extendWith,
    isRunning: isTimerRunning,
  }

  return timer
}
