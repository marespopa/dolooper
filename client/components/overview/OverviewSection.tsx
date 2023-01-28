import React, { useState } from 'react'
import { TimestampList, TimestampType } from '../../types/types'
import Alert from '../banners/Alert'
import { pagePadding, boxStyles } from '../common/common'
import ButtonIcon from '../forms/buttons/ButtonIcon'
import ButtonLink from '../forms/buttons/ButtonLink'
import Input from '../forms/input/Input.component'
import Issue from '../planning/issue/Issue.component'
import TasksList from '../planning/tasks/TasksList'
import DashboardContainer from './dashboard'
import Greeting from './greeting/Greeting.component'
import TimelogContainer from './timelog'

type Props = {
  issue: {
    value: string
    action: {
      onUpdate: (_arg: string) => void
    }
  }
  scratchpad: {
    value: string
    action: {
      onUpdate: (_arg: string) => void
    }
  }
  dashboard: {
    isLoading: boolean
    estimation: number
    timeEntries: TimestampList
    actions: {
      onAdd: (_arg: TimestampType) => void
    }
  }
  handleReset: () => void
}

const OverviewSection = ({
  issue,
  scratchpad,
  dashboard,
  handleReset,
}: Props) => {
  const [isIssueEditable, setIsIssueEditable] = useState(false)
  const hasTimeEntries = dashboard.timeEntries.length > 0

  return (
    <section className={`${pagePadding}`}>
      <Greeting />
      <div className="flex flex-col md:flex-row mt-6 md:md-0">
        <div
          className={`${boxStyles} relative flex-auto w-full mb-3 md:mb-0 md:w-1/2 mr-3 px-2 md:px-4 py-3`}
        >
          <h2 className="font-bold mt-0 mb-3">Task</h2>
          <Issue
            action={issue.action.onUpdate}
            value={issue.value}
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
          Scratchpad
        </label>
        <Input
          id="scratchpad"
          type="textarea"
          label="Start typing your notes..."
          action={scratchpad.action.onUpdate}
          value={scratchpad.value}
        />
      </div>
      {!dashboard.isLoading && (
        <DashboardContainer
          initialEstimation={dashboard.estimation}
          timestampList={dashboard.timeEntries}
          actions={{
            onAdd: dashboard.actions.onAdd,
          }}
        />
      )}
      <Alert style="success">
        {`Completed this task? `}
        <ButtonLink action={handleReset} text={'Start a new one'}></ButtonLink>
      </Alert>

      {hasTimeEntries && (
        <Alert style="info">
          {`Want to see a list of all your time entries? `}
          <TimelogContainer entries={dashboard.timeEntries} />
        </Alert>
      )}
    </section>
  )
}

export default OverviewSection
