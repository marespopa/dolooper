import React, { useEffect, useState } from 'react'
import ButtonSecondary from '../forms/buttons/ButtonSecondary'
import { POMODORO_CONFIG } from 'utils/constants'
import { toast } from 'react-toastify'
import useCountdown from 'hooks/use-countdown'
import { formatTimeFromMinutes, getPomodoroTime } from 'utils/functions'
import PomodoroConfigSection from './ConfigSection'
import service from 'services/service'

const Pomodoro = () => {
  const [showConfig, setShowConfig] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [workTime, setWorkTime] = useState(POMODORO_CONFIG.default)

  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: workTime * 60,
  })

  useEffect(() => {
    service.getPomodoroTimer().then((results) => {
      if (results) {
        setWorkTime(parseInt(results))
      }
    })
  }, [])

  function updateTimerValue(value: string) {
    service.setPomodoroTimer(value)
  }

  useEffect(() => {
    if (isRunning && count === 0) {
      triggerNotification()
      setIsRunning(false)
      resetCountdown()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  const statusLabel = isRunning ? 'Working' : `Let's start`
  const statusBg = isRunning ? 'bg-red-400' : 'bg-amber-300 dark:bg-amber-200'

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="mt-2 flex items-center">
        <span className={`w-4 h-4 rounded-full mr-2 ${statusBg}`}></span>
        <span>{statusLabel}</span>
      </div>

      <h2 className="text-3xl font-bold mb-2">
        {isRunning && getPomodoroTime(count * 1000)}
        {!isRunning && `${formatTimeFromMinutes(workTime)}`}
      </h2>
      <div className="flex flex-row md:justify-center">
        {!isRunning ? (
          <>
            <ButtonSecondary
              variant="success"
              text="Start"
              action={handleStart}
            />
            <ButtonSecondary
              text="Settings"
              action={() => setShowConfig(!showConfig)}
              style="ml-4"
            />
          </>
        ) : (
          <>
            <ButtonSecondary text="Reset" action={handleReset} style="ml-4" />
          </>
        )}
      </div>

      {showConfig && (
        <PomodoroConfigSection
          timer={workTime}
          handleTimeChange={handleWorkTimeChange}
        />
      )}
    </section>
  )

  function handleStart() {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
    }
    setShowConfig(false)
    resetCountdown()
    startCountdown()
    setIsRunning(true)
    updateTimerValue(`${workTime}`)
  }

  function handleReset() {
    setIsRunning(false)
    resetCountdown()
  }

  function handleWorkTimeChange(value: string) {
    const parsedValue = parseInt(value, 10)
    setWorkTime(parsedValue)
  }

  function triggerNotification() {
    if (window.Notification && Notification.permission !== 'denied') {
      Notification.requestPermission(function (_status) {
        // status is "granted", if accepted by user
        new Notification('Pomodoro Timer', {
          body: 'Time to take a break!',
          icon: '/favicon.ico',
        })
      })
      toast.success(`Time is up! Let's get a break.`)
    }
  }
}

export default Pomodoro
