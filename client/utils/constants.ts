export const SECOND = 1000
export const MINUTE = 60
export const HOUR = MINUTE * 60
export const DAY = HOUR * 24
export const MIN_TIME_FOR_EXTENSION = MINUTE * 15

// values in config represent minutes
export const ESTIMATION_CONFIG = {
  min: 15,
  max: 60 * 5,
  step: 15,
  default: 60 * 2.5,
}

// values in config represent minutes
export const TIMER_CONFIG = {
  min: 1,
  max: 60,
  step: 1,
  default: 40,
}

export const STATUSES = {
  none: 'Waiting',
  break: 'Break',
  work: 'Work',
}
