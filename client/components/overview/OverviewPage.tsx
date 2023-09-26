import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import StorageService from '../../services/storageService'
import Container from '../container/Container.component'
import OverviewSection from './OverviewSection'

const OverviewPage = () => {
  const [issue, setIssue] = useState('')
  const router = useRouter()

  useEffect(() => {
    StorageService.getDescription().then((results) => {
      if (results) {
        setIssue(results)
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
    handleReset,
  }

  return (
    <Container>
      <OverviewSection {...sectionProps} />
    </Container>
  )

  function handleReset() {
    StorageService.resetAll()
    router.push('/planning')
  }

  function handleUpdateIssue(value: string) {
    setIssue(value)
    StorageService.setDescription(value)
  }
}

export default OverviewPage
