export const padTo2Digits = (value: number) => {
  if (value <= 0) {
    return '00'
  }

  return `${Math.floor(value)}`.padStart(2, '0')
}

export const getFormattedTime = (time: number) => {
  let hours = Math.floor(time / 3600)
  let minutes = Math.floor((time - hours * 3600) / 60)
  let seconds = time - hours * 3600 - minutes * 60

  const numeric = { hours, minutes, seconds }

  const parsed = {
    hours: padTo2Digits(hours),
    minutes: padTo2Digits(minutes),
    seconds: padTo2Digits(seconds),
  }

  return {
    numeric,
    parsed,
  }
}
