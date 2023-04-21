import React, { useEffect, useState } from 'react'
import ButtonSecondary from '../forms/buttons/ButtonSecondary'
import PomodoroConfigSection from './ConfigSection'
import { POMODORO_CONFIG } from 'utils/constants'
import { toast } from 'react-toastify'
import useCountdown from 'hooks/use-countdown'
import { getPomodoroTime } from 'utils/functions'

const Pomodoro = () => {
  const [minutes, setMinutes] = useState<number>(
    POMODORO_CONFIG.workTime.default,
  )
  const [showConfig, setShowConfig] = useState(false)
  const [isWorking, setIsWorking] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [workTime, setWorkTime] = useState(POMODORO_CONFIG.workTime.default)
  const [breakTime, setBreakTime] = useState(POMODORO_CONFIG.breakTime.default)

  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: minutes * 60,
    })

  useEffect(() => {
    if (count === 0) {
      triggerNotification()
      setIsRunning(false)
      /* TODO Reset minutes */
      setMinutes(isWorking ? breakTime : workTime)
      setIsWorking(!isWorking)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  const statusLabel = isRunning
    ? isWorking
      ? 'Working'
      : 'On a break'
    : `Let's start`
  const statusBg = isRunning
    ? isWorking
      ? 'bg-red-400'
      : 'bg-teal-400'
    : 'bg-amber-300 dark:bg-amber-200'

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="mt-2 flex items-center">
        <span className={`w-4 h-4 rounded-full mr-2 ${statusBg}`}></span>
        <span>{statusLabel}</span>
      </div>

      <h2 className="text-3xl font-bold mb-2">
        {getPomodoroTime(count * 1000)}
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
            <ButtonSecondary
              variant="error"
              text="Pause"
              action={handlePause}
            />
            <ButtonSecondary text="Reset" action={handleReset} style="ml-4" />
          </>
        )}
      </div>

      {showConfig && (
        <PomodoroConfigSection
          workTime={workTime}
          breakTime={breakTime}
          actions={{
            handleWorkTimeChange: handleWorkTimeChange,
            handleBreakTimeChange: handleBreakTimeChange,
          }}
        />
      )}
    </section>
  )

  function handleStart() {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
    }
    if (!isWorking) {
      setIsWorking(true)
    }

    setIsRunning(true)
    startCountdown()
  }

  function handlePause() {
    stopCountdown()
    setIsRunning(false)
  }

  function handleReset() {
    setIsRunning(false)
    setMinutes(workTime)
    resetCountdown()
  }

  function handleWorkTimeChange(value: string) {
    const parsedValue = parseInt(value, 10)
    setWorkTime(parsedValue)
    if (!isRunning) {
      handleReset()
    }
  }

  function handleBreakTimeChange(value: string) {
    const parsedValue = parseInt(value, 10)
    setBreakTime(parsedValue)
  }

  function triggerNotification() {
    if (window.Notification && Notification.permission !== 'denied') {
      Notification.requestPermission(function (_status) {
        // status is "granted", if accepted by user
        new Notification('Pomodoro Timer', {
          body: isWorking
            ? 'Time to take a break!'
            : 'Time to get back to work!',
          icon: '/favicon.ico',
        })
      })
      toast.success(
        `${isWorking ? 'Time to take a break!' : 'Time to get back to work!'}`,
      )
    }
  }
}

export default Pomodoro
