import React, { useState, useEffect } from 'react'
import ButtonSecondary from '../forms/buttons/ButtonSecondary'
import PomodoroConfigSection from './ConfigSection'
import { POMODORO_CONFIG } from 'utils/constants'

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(POMODORO_CONFIG.workTime.default)
  const [seconds, setSeconds] = useState(0)
  const [isWorking, setIsWorking] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const [showConfig, setShowConfig] = useState(false)
  const [workTime, setWorkTime] = useState(POMODORO_CONFIG.workTime.default)
  const [breakTime, setBreakTime] = useState(POMODORO_CONFIG.breakTime.default)

  useEffect(() => {
    if (isRunning) {
      if (minutes < 0) {
        triggerNotification()
        setIsRunning(false)
        setIsWorking((prev) => !prev)
        setMinutes(isWorking ? breakTime : workTime)
        setSeconds(0)
      } else {
        const timerId = setTimeout(() => {
          if (seconds === 0) {
            setMinutes((prev) => prev - 1)
            setSeconds(59)
          } else {
            setSeconds((prev) => prev - 1)
          }
        }, 1000)

        return () => clearTimeout(timerId)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, minutes, seconds, isWorking, workTime, breakTime])

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="mt-2 flex items-center">
        <span
          className={`w-4 h-4 rounded-full mr-2 ${
            isRunning
              ? isWorking
                ? 'bg-red-500'
                : 'bg-teal-500'
              : 'bg-white dark:bg-amber-200'
          }`}
        ></span>
        <span>
          {isRunning ? (isWorking ? 'Working' : 'On Break') : "Let's start"}
        </span>
      </div>

      <h2 className="text-3xl font-bold mb-2">
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
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
    setIsRunning(true)
  }

  function handlePause() {
    setIsRunning(false)
  }

  function handleReset() {
    setIsRunning(false)
    setMinutes(workTime)
    setSeconds(0)
  }

  function handleWorkTimeChange(value: string) {
    const parsedValue = parseInt(value, 10)
    setWorkTime(parsedValue)
    if (!isRunning) {
      setMinutes(parsedValue)
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
    }
  }
}

export default Pomodoro
