export const SECOND = 1000
export const MINUTE = 60
export const HOUR = MINUTE * 60
export const DAY = HOUR * 24
export const MIN_TIME_FOR_EXTENSION = MINUTE * 15

export const SESSION_LENGTH = {
  min: 15, //minutes
  max: 60 * 2, //hours
  step: 15,
  default: 60,
}

export const STATUSES = {
  none: 'Waiting',
  break: 'Break',
  work: 'Work',
}
