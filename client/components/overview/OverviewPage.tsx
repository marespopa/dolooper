import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import service from '../../services/service'
import { boxStyles, pagePadding } from '../common/common'
import Container from '../container/Container.component'
import Input from '../forms/input/Input.component'
import TasksList from '../planning/tasks/TasksList'
import Alert from '../banners/Alert'
import { TimestampList, TimestampType } from '../../types/types'
import uuid from 'react-uuid'
import DashboardContainer from './dashboard'
import Issue from '../planning/issue/Issue.component'
import ButtonIcon from '../forms/buttons/ButtonIcon'
import Greeting from './greeting/Greeting.component'
import TimelogContainer from './timelog'
import ButtonLink from '../forms/buttons/ButtonLink'

const OverviewPage = () => {
  const [issue, setIssue] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [estimation, setEstimation] = useState<number>(30)
  const [isIssueEditable, setIsIssueEditable] = useState(false)
  const [timeEntries, setTimeEntries] = useState<TimestampList>([])
  const [notes, setNotes] = useState('')
  const hasTimeEntries = timeEntries.length > 0

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

  return (
    <Container>
      <section className={`${pagePadding}`}>
        <Greeting />
        {!isLoading && (
          <DashboardContainer
            initialEstimation={estimation}
            timestampList={timeEntries}
            actions={{
              onAdd: handleTimeEntryAdd,
            }}
          />
        )}
        <div className="flex flex-col md:flex-row mt-6 md:md-0">
          <div
            className={`${boxStyles} relative flex-auto w-full mb-3 md:mb-0 md:w-1/2 mr-3 px-2 md:px-4 py-3`}
          >
            <h2 className="font-bold mt-0 mb-3">Task</h2>
            <Issue
              action={updateIssue}
              value={issue}
              isEdit={isIssueEditable}
            />
            <div className="absolute -top-2 -right-2 opacity-90">
              <ButtonIcon
                variant="edit"
                action={() => setIsIssueEditable(!isIssueEditable)}
              ></ButtonIcon>
            </div>
          </div>
          <div
            className={`${boxStyles} flex-auto w-full md:w-1/2 px-2 md:px-4 py-3`}
          >
            <TasksList area="overview" />
          </div>
        </div>
        <div className={`${boxStyles} mt-6 mb-4 px-2 md:px-4 pt-3 pb-6`}>
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block font-bold mt-0 mb-3"
          >
            Notes
          </label>
          <Input
            id="notes"
            type="textarea"
            label="Jot down notes"
            action={handleNotesChange}
            value={notes}
          />
        </div>
        <Alert style="success">
          {`Completed this task? `}
          <ButtonLink
            action={handleReset}
            text={'Start a new one'}
          ></ButtonLink>
        </Alert>

        {hasTimeEntries && (
          <Alert style="info">
            {`Want to see a list of all your time entries? `}
            <TimelogContainer entries={timeEntries} />
          </Alert>
        )}
      </section>
    </Container>
  )

  function handleNotesChange(value: string) {
    setNotes(value)
  }

  function handleTimeEntryAdd(type: TimestampType) {
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

  function updateIssue(value: string) {
    setIssue(value)
    service.setDescription(value)
  }
}

export default OverviewPage
