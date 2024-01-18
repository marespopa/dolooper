export type Task = {
  key: string
  value: string
  isDone: boolean
}

export type TaskActions = {
  handleDelete: (_key: string) => void
  handleEdit: (_key: string, _newValue: string) => void
  handleToggle: (_key: string) => void
  handleReorder: (_sourceIndex: number, _destinationIndex: number) => void
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
  value: Date
}

export type TimestampList = Timestamp[] | []
