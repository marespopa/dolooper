import { useEffect, useRef, useState } from 'react'
import service from '../services/service'

export type CountdownData = {
  counter: number
  start: () => void
  pause: () => void
  reset: () => void
  isRunning: boolean
}

export const useTimer = (initialTime: number = 0, ms: number = 1000) => {
  const [counter, setCounter] = useState(initialTime)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  // Store the created interval
  const intervalId = useRef<number>()
  const start: () => void = () => setIsTimerRunning(true)
  const pause: () => void = () => setIsTimerRunning(false)
  const reset: () => void = () => {
    clearInterval(intervalId.current)
    setIsTimerRunning(false)
    setCounter(0)
  }

  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      isTimerRunning && setCounter((counter) => counter + 1)
    }, ms)

    // Clear interval when unmount
    return () => {
      service.setTimer(counter)
      clearInterval(intervalId.current)
    }
  }, [isTimerRunning, counter, ms])

  const extendWith = (interval: number) => {
    setCounter(counter + interval)
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
