import { atomWithStorage } from 'jotai/utils'
import { INITIAL_TASK_DESCRIPTION, INITIAL_TASK_TITLE } from './contants'
import { type Task } from '../types/types'

export type Snippet = {
  id: string
  value: string
}

const KEYS = {
  title: 'title',
  description: 'description',
  snippets: 'snippets',
  subTasks: 'subtasks',
}

export const atom_snippets = atomWithStorage<Array<Snippet>>(KEYS.snippets, [])
export const atom_title = atomWithStorage(KEYS.title, INITIAL_TASK_TITLE)
export const atom_description = atomWithStorage(
  KEYS.description,
  INITIAL_TASK_DESCRIPTION,
)
export const atom_subTasks = atomWithStorage<Array<Task>>(KEYS.subTasks, [])
