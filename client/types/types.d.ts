export type Task = {
  key: string
  isDone: boolean
  value: string
}

const test = Object.entries({
  sec: 12,
  min: 12,
})

export type Time = typeof test
