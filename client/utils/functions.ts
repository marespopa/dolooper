import moment from 'moment'

export const formatTimeFromMS = (time: number) => {
  return moment(time).format('DD/MM/YYYY hh:mm')
}
