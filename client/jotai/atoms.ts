import { atomWithStorage } from 'jotai/utils'
import { type Task } from '../types/types'
import { DEFAULT_TEMPLATES } from '@/components/planning/TemplateSection/contants'

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
export const atom_title = atomWithStorage(
  KEYS.title,
  DEFAULT_TEMPLATES.generic.title,
)
export const atom_description = atomWithStorage(
  KEYS.description,
  DEFAULT_TEMPLATES.generic.description,
)
export const atom_subTasks = atomWithStorage<Array<Task>>(KEYS.subTasks, [])
