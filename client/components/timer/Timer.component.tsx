import { useState, useEffect, useRef } from 'react'
import { getPomodoroTime } from 'utils/functions'
import ButtonSecondary from '../forms/buttons/ButtonSecondary'
import service from 'services/service'

function Timer() {
  const [isRunning, setIsRunning] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())
  const [currentTime, setCurrentTime] = useState(startTime)
  const counter = currentTime - startTime
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    service.getStartTime().then((value) => {
      console.log(`Value is ${value}`)
      if (value && value > 0) {
        setStartTime(value)
        startTimer()
      }
    })
  }, [])

  // Use the useEffect hook to cleanup the interval when the component unmounts
  useEffect(() => {
    // here's the cleanup function
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [])

  const statusBg = 'bg-amber-300 dark:bg-amber-200'
  const statusLabel = counter > 0 ? 'Work' : `Let's start`

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="mt-2 flex items-center">
        <span className={`w-4 h-4 rounded-full mr-2 ${statusBg}`}></span>
        <span>{statusLabel}</span>
      </div>

      <h2 className="text-3xl font-bold mb-2 font-mono">
        {isRunning && counter <= 0 && 'Starting...'}
        {isRunning && counter > 0 && getPomodoroTime(counter)}
        {!isRunning && `Not started`}
      </h2>

      <div className="flex flex-row md:justify-center">
        {!isRunning && (
          <ButtonSecondary
            text="Start"
            variant="success"
            action={handleStart}
          />
        )}

        {isRunning && (
          <ButtonSecondary text="Stop" variant="error" action={handleStop} />
        )}
      </div>
    </section>
  )

  function handleStart() {
    if (intervalRef.current !== null) return
    const currentTime = Date.now()

    setStartTime(currentTime)
    service.setStartTime(Date.now())
    startTimer()
  }

  // Stop the interval
  // This will be called when the user clicks on the stop button
  function handleStop() {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      setCurrentTime(null)
      setStartTime(null)
      service.removeStartTime()
      intervalRef.current = null
      setIsRunning(false)
    }
  }

  function startTimer() {
    setIsRunning(true)
    intervalRef.current = window.setInterval(
      () => setCurrentTime(Date.now()),
      1000,
    )
  }
}

export default Timer
