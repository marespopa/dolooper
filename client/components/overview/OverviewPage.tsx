import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import service from '../../services/service'
import Container from '../container/Container.component'
import OverviewSection from './OverviewSection'

const OverviewPage = () => {
  const [issue, setIssue] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [estimation, setEstimation] = useState<number>(30)

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

  const sectionProps = {
    issue: {
      value: issue,
      action: {
        onUpdate: handleUpdateIssue,
      },
    },
    estimation,
    isLoading,
    handleReset,
  }

  return (
    <Container>
      <OverviewSection {...sectionProps} />
    </Container>
  )

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
