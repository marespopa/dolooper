import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import service from '../../services/service'
import Container from '../container/Container.component'
import { TimestampList, TimestampType } from '../../types/types'
import OverviewSection from './OverviewSection'
import WorkManager from '../../services/workManager'
import { nanoid } from 'nanoid'

const OverviewPage = () => {
  const [issue, setIssue] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [estimation, setEstimation] = useState<number>(30)
  const [timeEntries, setTimeEntries] = useState<TimestampList>([])

  const router = useRouter()

  useEffect(() => {
    service.getDescription().then((results) => {
      if (results) {
        setIssue(results)
      }
    })
  }, [])

  useEffect(() => {
    service.getEstimation().then((results) => {
      if (results) {
        setEstimation(results)
        setIsLoading(false)
      }
    })
  }, [])

  useEffect(() => {
    WorkManager.getTimeline().then((results) => {
      if (results) {
        setTimeEntries(results)
        setIsLoading(false)
      }
    })
  }, [])

  const sectionProps = {
    issue: {
      value: issue,
      action: {
        onUpdate: handleUpdateIssue,
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
  function handleAddTimeEntry(type: TimestampType) {
    const arr = [
      ...timeEntries,
      {
        id: nanoid(),
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
