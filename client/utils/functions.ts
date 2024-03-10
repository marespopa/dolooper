import {
  format,
  formatDuration,
  intervalToDuration,
  isDate,
  isSameMonth,
  isSameYear,
  isToday,
} from 'date-fns'

export function getCurrentDate() {
  const currentDate = new Date()
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
  const formattedDate = dateFormatter.format(currentDate)

  return formattedDate
}

function getDateFormat(date: Date) {
  const today = Date.now()

  if (!isDate(date)) {
    return 'hh:mm'
  }

  if (isToday(date)) {
    return 'hh:mm bbb'
  }

  if (isSameMonth(date, today)) {
    return 'do hh:mm bbb'
  }

  if (isSameYear(date, today)) {
    return 'MMM do hh:mm bbb'
  }

  return 'YYYY MMM do hh:mm bbb'
}

export const formatTimeFromDate = (date: Date) => {
  if (!date) {
    return ''
  }

  const dateFormat = getDateFormat(date)
  const formattedDate = format(date, dateFormat)

  return formattedDate
}

export const formatTimeFromMS = (time: number) => {
  const duration = intervalToDuration({ start: 0, end: time })

  if (!duration) {
    return ''
  }

  const formattedString = formatDuration(duration, {
    format: ['days', 'hours', 'minutes', 'seconds'],
  })

  return formattedString
}

export const zeroPad = (num: number | string) => String(num).padStart(2, '0')

export const formatTimeFromMinutes = (time: number) => {
  if (isNaN(time)) {
    return 'Unable to retrieve minutes'
  }

  const hours = time / 60
  const remainingHours = Math.floor(hours)
  const minutes = (hours - remainingHours) * 60
  const remainingMinutes = Math.round(minutes)

  return `${remainingHours}h ${remainingMinutes}m`
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0')
}

export function getFormattedTimeFromMs(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  minutes = minutes % 60
  hours = hours % 24

  const hoursString = hours > 0 ? `${padTo2Digits(hours)}h ` : ''

  return `${hoursString}${padTo2Digits(minutes)}m ${padTo2Digits(seconds)}s`
}
