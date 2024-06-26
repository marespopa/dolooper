import { useState, useEffect, useRef, useCallback } from 'react'
import { getFormattedTimeFromMs } from 'utils/functions'
import ButtonSecondary from '../forms/buttons/ButtonSecondary'
import StorageService from 'services/storageService'
import TimerConfigSection from './ConfigSection'
import { TIMER_CONFIG } from 'utils/constants'
import useSound from 'use-sound'
import { useDocumentTitle } from 'hooks/use-document-title'
import { OVERVIEW_PAGE_TITLE } from '../overview/OverviewSection'
import ButtonIcon from '../forms/buttons/ButtonIcon'
import ButtonLink from '../forms/buttons/ButtonLink'

function Timer() {
  const [playStopSound] = useSound('resources/sounds/boop.mp3')
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
  const [_, setDocumentTitle] = useDocumentTitle(OVERVIEW_PAGE_TITLE)

  const isWorking = isRunning && counter > 0 && counter < workTimeInMs
  const isBreak = isRunning && counter > workTimeInMs

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        const results = await Promise.all([
          StorageService.getTime('start'),
          StorageService.getTime('work'),
        ])

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
      } catch (error) {
        // Handle errors here
        console.error('Error fetching data:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const title = getTitle(isWorking, isBreak)
    setDocumentTitle(title)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBreak, isWorking, counter, isRunning, setDocumentTitle, workTimeInMs])

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

  const [isTimerMinimized, setIsTimerMinimized] = useState(true)
  const isStarted = isRunning && counter > 0
  const isTimerStarting = isRunning && counter <= 0
  const showBreakMessage = isRunning && counter > workTimeInMs
  const statusBg = getStatusBgStyle()
  const statusLabel = getStatusLabel()
  const workTimeInfo = (
    <div className="text-xs p-2 mt-4">
      Timer set at {` `}
      <span className="font-bold">
        {workTime} {workTime <= 1 ? 'minute' : 'minutes'}
      </span>
    </div>
  )

  const getTitle = useCallback(
    (isWorking: boolean, isBreak: boolean, isTimer = false ) => {
      if (isWorking) {
        return getFormattedTimeFromMs(counter)
      }

      if (isBreak) {
        return `Timer expired`
      }

      return isTimer ? 'Timer' : OVERVIEW_PAGE_TITLE
    },
    [counter],
  )

  if (isLoading) {
    return <></>
  }

  return (
    <section className={`${timerPopStyles}`}>
      <h2
        className="font-bold flex justify-between cursor-pointer"
        onClick={() => toggleTimerWindow()}
      >
        <span className="font-mono">{getTitle(isWorking, isBreak, true)}</span>

        {isTimerMinimized && isRunning && (
          <ButtonLink action={handleStop}>
            {showBreakMessage ? 'Reset Timer' : 'Stop'}
          </ButtonLink>
        )}

        <ButtonIcon
          variant={isTimerMinimized ? 'minimize' : 'maximize'}
          action={() => toggleTimerWindow()}
        />
      </h2>

      {!isTimerMinimized && (
        <div className="flex flex-col justify-center items-center">
          {renderStatus()}
          {renderControlButtons()}
          {isStarted && !isTimeForABreak && workTimeInfo}
          {showConfiguration && (
            <TimerConfigSection
              timer={workTime}
              handleTimeChange={handleWorkTimeChange}
            />
          )}
        </div>
      )}
    </section>
  )

  function toggleTimerWindow() {
    setIsTimerMinimized(!isTimerMinimized)
  }

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
  }

  function getStatusBgStyle() {
    return isStarted
      ? showBreakMessage
        ? 'bg-red-500'
        : 'bg-blue-400 dark:bg-blue-200'
      : 'bg-teal-500'
  }

  function getStatusLabel() {
    return isStarted
      ? showBreakMessage
        ? 'Timer has expired...'
        : 'Timer running for...'
      : `Let's start`
  }

  function renderControlButtons() {
    return (
      <div className="flex flex-row md:justify-center">
        {!isRunning && (
          <ButtonSecondary variant="success" action={handleStart}>
            Start
          </ButtonSecondary>
        )}

        {isRunning && (
          <ButtonSecondary variant="error" action={handleStop}>
            {showBreakMessage ? 'Reset Timer' : 'Stop'}
          </ButtonSecondary>
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

const timerPopStyles = `bg-amber-300 shadow-sm px-2 md:px-4 py-3 my-4 rounded-md
                        w-full sm:w-1/2 z-10 md:w-1/4 sm:fixed sm:right-4 sm:bottom-2
                        dark:bg-gray-600 dark:text-white dark:border-gray-600 sm:opacity-95`

export default Timer
