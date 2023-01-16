import moment from 'moment'

export const formatTimeFromMS = (time: number) => {
  const date = moment(time)

  const formatString = date.isSame(moment(), 'day')
    ? 'hh:mm'
    : 'DD/MM/YYYY hh:mm'

  return moment(time).format(formatString)
}
