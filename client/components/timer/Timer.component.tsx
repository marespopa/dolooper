import { useState, useEffect } from 'react'
import { getPomodoroTime } from 'utils/functions'
import ButtonSecondary from '../forms/buttons/ButtonSecondary'
import service from 'services/service'
import { toast } from 'react-toastify'

function Timer() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {}, [])

  useEffect(() => {
    service.getElapsedTime().then((results) => {
      if (results) {
        const value = parseInt(results)
        if (value && value > 0) {
          setTime(value)
        }
      }
    })
  }, [])

  useEffect(() => {
    let timer = null
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1
          service.setElapsedTime(newTime.toString())
          return newTime
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning])

  const isOnBreak = !isRunning && time > 0

  const statusLabel = isOnBreak ? 'Break' : time > 0 ? 'Work' : `Let's start`
  const statusBg = isRunning ? 'bg-red-400' : 'bg-amber-300 dark:bg-amber-200'

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="mt-2 flex items-center">
        <span className={`w-4 h-4 rounded-full mr-2 ${statusBg}`}></span>
        <span>{statusLabel}</span>
      </div>

      <h2 className="text-3xl font-bold mb-2 font-mono">
        {isRunning && getPomodoroTime(time * 1000)}
        {isOnBreak && `${getPomodoroTime(time * 1000)}`}
        {!isRunning && !isOnBreak && `Not started`}
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
          <ButtonSecondary text="Pause" variant="error" action={handlePause} />
        )}

        <ButtonSecondary
          text="Reset"
          variant="default"
          action={handleReset}
          style="ml-4"
        />
      </div>
    </section>
  )

  function handleStart() {
    toast.success(`Work started.`)
    setIsRunning(true)
  }

  function handlePause() {
    toast.info(`Break time!`)
    setIsRunning(false)
  }

  function handleReset() {
    setIsRunning(false)
    setTime(0)
    service.removeElapsedTime()
  }
}

export default Timer
