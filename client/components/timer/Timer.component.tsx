import { useState, useEffect, useRef } from 'react'
import { getFormattedTimeFromMs } from 'utils/functions'
import ButtonSecondary from '../forms/buttons/ButtonSecondary'
import StorageService from 'services/storageService'
import TimerConfigSection from './ConfigSection'
import { TIMER_CONFIG } from 'utils/constants'
import { toast } from 'react-toastify'
import useSound from 'use-sound'

function Timer() {
  const [playStopSound] = useSound('resources/sounds/boop.mp3')
  const [playStartSound] = useSound('resources/sounds/start-tick.wav')
  const [isLoading, setIsLoading] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const [showConfiguration, setShowConfiguration] = useState(true)
  const [startTime, setStartTime] = useState<number | null>(Date.now())
  const [workTime, setWorkTime] = useState(TIMER_CONFIG.default)
  const workTimeInMs = workTime * 60 * 1000
  const [currentTime, setCurrentTime] = useState<number | null>(startTime)
  const counter = (currentTime || 0) - (startTime || 0)
  const intervalRef = useRef<number | null>(null)
  const [isNotificationShown, setIsNotificationShown] = useState(false)
  const isTimeForABreak = isRunning && counter > workTimeInMs

  useEffect(() => {
    const promises = [
      StorageService.getTime('start'),
      StorageService.getTime('work'),
    ]
    setIsLoading(true)
    Promise.all(promises).then((results) => {
      const startTime = results[0]
      const workTime = results[1]

      if (startTime && startTime > 0) {
        setStartTime(startTime)
        startTimer()
        setShowConfiguration(false)
      }

      if (workTime && workTime > 0) {
        setWorkTime(workTime)
      }

      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [])

  useEffect(() => {
    function onWorkTimeExpired() {
      setIsNotificationShown(true)
      triggerBreakNotification()
    }

    if (!isNotificationShown) {
      if (isTimeForABreak) {
        onWorkTimeExpired()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimeForABreak, isNotificationShown, isRunning, workTime, counter])

  const isStarted = isRunning && counter > 0
  const isTimerStarting = isRunning && counter <= 0
  const showBreakMessage = isRunning && counter > workTimeInMs
  const statusBg = getStatusBgStyle()
  const statusLabel = getStatusLabel()
  const workTimeInfo = (
    <div className="text-xs p-2 mt-4">
      Timer set at {` `}
      <span className="font-bold">{workTime} minutes</span>
    </div>
  )

  if (isLoading) {
    return (
      <section className="flex flex-col justify-center items-center">
        <h3 className="text-xl p-16">Loading Timer...</h3>
      </section>
    )
  }

  return (
    <section className="flex flex-col justify-center items-center">
      {renderStatus()}
      {renderControlButtons()}
      {isStarted && !isTimeForABreak && workTimeInfo}
      {showConfiguration && (
        <TimerConfigSection
          timer={workTime}
          handleTimeChange={handleWorkTimeChange}
        />
      )}
    </section>
  )

  function renderStatus() {
    return (
      <>
        <div className="mt-2 flex items-center">
          <span className={`w-4 h-4 rounded-full mr-2 ${statusBg}`}></span>
          <span>{statusLabel}</span>
        </div>
        <h2 className="text-3xl font-bold mb-2 font-mono">
          {isTimerStarting && 'Starting...'}
          {isStarted && !isTimeForABreak && getFormattedTimeFromMs(counter)}
          {isStarted &&
            isTimeForABreak &&
            `${getFormattedTimeFromMs(counter - workTimeInMs)} ago`}

          {!isRunning && `Not started`}
        </h2>
      </>
    )
  }

  function triggerBreakNotification() {
    playStopSound()
    toast.info('Time for a break!')
  }

  function getStatusBgStyle() {
    return isStarted
      ? showBreakMessage
        ? 'bg-red-500'
        : 'bg-amber-300 dark:bg-amber-200'
      : 'bg-teal-500'
  }

  function getStatusLabel() {
    return isStarted
      ? showBreakMessage
        ? 'Should have taken a break...'
        : 'Working...'
      : `Let's start`
  }

  function renderControlButtons() {
    return (
      <div className="flex flex-row md:justify-center">
        {!isRunning && (
          <ButtonSecondary
            text="Start"
            variant="success"
            action={handleStart}
          />
        )}

        {isRunning && (
          <ButtonSecondary
            text={showBreakMessage ? 'Take a break' : 'Stop'}
            variant="error"
            action={handleStop}
          />
        )}
      </div>
    )
  }

  function handleStart() {
    if (intervalRef.current !== null) {
      return
    }

    setShowConfiguration(false)
    const currentTime = Date.now()
    setIsNotificationShown(false)
    setStartTime(currentTime)
    StorageService.setTime('start', Date.now())
    startTimer()
    playStartSound()
  }

  function handleStop() {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      setCurrentTime(null)
      setStartTime(null)
      StorageService.removeTime('start')
      intervalRef.current = null
      setIsRunning(false)
      setShowConfiguration(true)
    }
  }

  function startTimer() {
    setIsRunning(true)
    intervalRef.current = window.setInterval(
      () => setCurrentTime(Date.now()),
      1000,
    )
  }

  function handleWorkTimeChange(time: string) {
    if (!time && !+time) {
      return
    }

    const value = +time

    setWorkTime(value)
    StorageService.setTime('work', value)
  }
}

export default Timer
