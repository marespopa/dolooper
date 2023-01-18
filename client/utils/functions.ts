import moment from 'moment'

export const formatTimeFromMS = (time: number) => {
  const date = moment(time)

  const formatString = date.isSame(moment(), 'day')
    ? 'hh:mm a'
    : 'DD/MM/YYYY hh:mm a'

  return moment(time).format(formatString)
}

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
