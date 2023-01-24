export type Task = {
  key: string
  value: string
  isDone: boolean
}

const test = Object.entries({
  sec: 12,
  min: 12,
})

export type Time = typeof test
export type TaskArea = 'overview' | 'planning'
export type TimestampType = 'work' | 'break'
export type Timestamp = {
  id: string
  type: TimestampType
  value: number
}

export type TimestampList = Timestamp[] | []
