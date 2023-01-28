import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import service from '../../services/service'
import Container from '../container/Container.component'
import { TimestampList, TimestampType } from '../../types/types'
import OverviewSection from './OverviewSection'

const OverviewPage = () => {
  const [issue, setIssue] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [estimation, setEstimation] = useState<number>(30)
  const [timeEntries, setTimeEntries] = useState<TimestampList>([])
  const [scratchpad, setNotes] = useState('')

  const router = useRouter()

  useEffect(() => {
    service.getDescription().then((results) => {
      if (!results) {
        return
      }

      setIssue(results)
    })
  }, [])

  useEffect(() => {
    service.getEstimation().then((results) => {
      if (!results) {
        return
      }

      setEstimation(results)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    service.getTimestamps().then((results) => {
      if (!results) {
        return
      }

      setTimeEntries(results)
      setIsLoading(false)
    })
  }, [])

  const sectionProps = {
    issue: {
      value: issue,
      action: {
        onUpdate: handleUpdateIssue,
      },
    },
    scratchpad: {
      value: scratchpad,
      action: {
        onUpdate: handleUpdateScratchpad,
      },
    },
    dashboard: {
      isLoading: isLoading,
      estimation: estimation,
      timeEntries: timeEntries,
      actions: {
        onAdd: handleAddTimeEntry,
      },
    },
    handleReset: handleReset,
  }

  return (
    <Container>
      <OverviewSection {...sectionProps} />
    </Container>
  )

  function handleUpdateScratchpad(value: string) {
    setNotes(value)
  }

  function handleAddTimeEntry(type: TimestampType) {
    const arr = [
      ...timeEntries,
      {
        id: uuid(),
        type: type,
        value: new Date(),
      },
    ]
    setTimeEntries(arr)
    service.setTimestamps(arr)
  }

  function handleReset() {
    service.resetAll()
    router.push('/planning')
  }

  function handleUpdateIssue(value: string) {
    setIssue(value)
    service.setDescription(value)
  }
}

export default OverviewPage
