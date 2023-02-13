import { createContext } from 'react'

type WorkStateContext = 'working' | 'break' | 'na'

const WorkStateContext = createContext<WorkStateContext>('na')

export default WorkStateContext
