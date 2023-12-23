import { atomWithStorage } from 'jotai/utils'
import { INITIAL_DESCRIPTION } from './contants'
import { type Task } from '../types/types'

export type Snippet = {
  id: string
  value: string
}

const KEYS = {
  description: 'description',
  snippets: 'snippets',
  subTasks: 'subtasks',
}

export const atom_snippets = atomWithStorage<Array<Snippet>>(KEYS.snippets, [])
export const atom_description = atomWithStorage(
  KEYS.description,
  INITIAL_DESCRIPTION,
)
export const atom_subTasks = atomWithStorage<Array<Task>>(KEYS.subTasks, [])
