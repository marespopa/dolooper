import { useRouter } from 'next/router'
import React, { use, useEffect, useState } from 'react'
import service from '../../services/service'
import { boxStyles } from '../common/common'
import Container from '../container/Container.component'
import Input from '../forms/input/Input.component'
import TasksList from '../journey/tasks/TasksList'
import Alert from '../banners/Alert'
import { TimestampList, TimestampType } from '../../types/types'
import moment from 'moment'
import uuid from 'react-uuid'
import Timelog from './timelog'

const OverviewSection = () => {
  const [plan, setPlan] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [estimation, setEstimation] = useState<number>(30)
  const [timestampList, setTimestampList] = useState<TimestampList>([])
  const [notes, setNotes] = useState('')
  const router = useRouter()

  useEffect(() => {
    service.getPlan().then((results) => {
      if (!results) {
        return
      }

      setPlan(results)
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

      setTimestampList(results)
      setIsLoading(false)
    })
  }, [])

  function handleNotesChange(value: string) {
    setNotes(value)
  }

  function handleTimeEntryAdd(type: TimestampType) {
    const arr = [
      ...timestampList,
      {
        id: uuid(),
        type: type,
        value: moment.now(),
      },
    ]
    setTimestampList(arr)
    service.setTimestamps(arr)
  }

  function handleTimeEntryDelete(key: string) {
    const arr = timestampList.filter((item) => item.id !== key)

    setTimestampList(arr)
    service.setTimestamps(arr)
  }

  function handleReset() {
    service.resetAll()
    router.push('/journey')
  }

  function updatePlan(value: string) {
    setPlan(value)
    service.setPlan(value)
  }

  return (
    <Container>
      <section>
        {!isLoading && (
          <Timelog
            initialEstimation={estimation}
            timestampList={timestampList}
            actions={{
              onAdd: handleTimeEntryAdd,
              onDelete: handleTimeEntryDelete,
            }}
          />
        )}
        <div className="flex flex-col md:flex-row mt-6 md:md-0">
          <div
            className={`${boxStyles} flex-auto w-full mb-3 md:mb-0 md:w-1/2 mr-3 px-2 md:px-4 py-3`}
          >
            <h2 className="font-bold mt-0 mb-3">Plan</h2>
            <div>
              <Input
                action={updatePlan}
                id={'plan'}
                label={'Refine your plan'}
                value={plan}
                type="textarea"
              />
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
          <button className="text-gray-800 underline" onClick={handleReset}>
            Start a new one
          </button>
        </Alert>
      </section>
    </Container>
  )
}

export default OverviewSection
