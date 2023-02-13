import React, { useState } from 'react'
import PauseSVG from '../../icons/PauseSVG'
import PlaySVG from '../../icons/PlaySVG'
import WorkManager from '../../services/workManager'
import { TimestampList, TimestampType } from '../../types/types'
import { STATUSES } from '../../utils/constants'
import Alert from '../banners/Alert'
import { pagePadding, boxStyles } from '../common/common'
import ButtonIcon from '../forms/buttons/ButtonIcon'
import ButtonLink from '../forms/buttons/ButtonLink'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'
import Issue from '../planning/issue/Issue.component'
import TasksList from '../planning/tasks/TasksList'
import Seo from '../Seo'
import Greeting from './greeting/Greeting.component'
import Scratchpad from './scratchpad/Scratchpad.component'
import OverviewSummary from './timelog'

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
  const pageTitle = formatPageTitle()
  const timestampList = dashboard.timeEntries
  const status = WorkManager.getStatus(timestampList)
  const isWorking = status === STATUSES.work
  const actionButtonText = (
    <div className="flex items-center">
      {isWorking ? (
        <>
          <span className="mr-2">{'Take a break'}</span>
          <PauseSVG />
        </>
      ) : (
        <>
          <span className="mr-2"> {'Start working'}</span>
          <PlaySVG />
        </>
      )}
    </div>
  )

  function formatPageTitle() {
    return `Work - Doloper`
  }

  function handleTimeEntryAdd() {
    if (timestampList.length === 0) {
      return dashboard.actions.onAdd('work')
    }

    const currentType = timestampList[timestampList.length - 1].type
    const nextType = currentType === 'break' ? 'work' : 'break'

    return dashboard.actions.onAdd(nextType)
  }

  const taskDashboard = (
    <div className="flex flex-col md:flex-row my-6 md:md-0">
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
  )

  return (
    <>
      <Seo title={pageTitle} />
      <section className={`${pagePadding}`}>
        <Greeting />
        {taskDashboard}

        <ButtonPrimary
          action={() => handleTimeEntryAdd()}
          text={actionButtonText}
        ></ButtonPrimary>
        <Scratchpad value={scratchpad.value} action={scratchpad.action} />

        <Alert style="success">
          {`Completed this task? `}
          <ButtonLink
            action={handleReset}
            text={'Start a new one'}
          ></ButtonLink>
        </Alert>

        {hasTimeEntries && (
          <Alert style="info">
            {`Want to see a summary of your progress on this task? `}
            <OverviewSummary
              entries={dashboard.timeEntries}
              estimation={dashboard.estimation}
              isLoading={dashboard.isLoading}
            />
          </Alert>
        )}
      </section>
    </>
  )
}

export default OverviewSection
