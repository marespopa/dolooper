import { atomWithStorage } from 'jotai/utils'

export type Snippet = {
  id: string
  value: string
}

const SNIPPETS_KEY = 'snippets'

export const atom_snippets = atomWithStorage<Array<Snippet>>(SNIPPETS_KEY, [])
