import React, { useState } from 'react'
import Alert from '../banners/Alert'
import { pagePadding, boxStyles } from '../common/common'
import ButtonIcon from '../forms/buttons/ButtonIcon'
import ButtonLink from '../forms/buttons/ButtonLink'
import Issue from '../planning/issue/Issue.component'
import TasksList from '../planning/tasks/TasksList'
import Seo from '../Seo'
import { formatTimeFromMinutes } from 'utils/functions'
type Props = {
  issue: {
    value: string
    action: {
      onUpdate: (_arg: string) => void
    }
  }
  estimation: number
  isLoading: boolean
  handleReset: () => void
}

const OverviewSection = ({
  issue,
  estimation,
  isLoading,
  handleReset,
}: Props) => {
  const [isIssueEditable, setIsIssueEditable] = useState(false)
  const pageTitle = 'Work - Dolooper'
  const sectionHeading = 'Currently working on'
  const estimationText = formatTimeFromMinutes(estimation)
  const taskDashboard = (
    <div className="flex flex-col mb-6 md:md-0">
      <div
        className={`${boxStyles} relative flex-auto w-full my-3 px-2 md:px-4 py-3`}
        onDoubleClick={() => {
          if (isIssueEditable) {
            return
          }
          setIsIssueEditable(!isIssueEditable)
        }}
      >
        <h2 className="text-xs mt-0 mb-1 flex justify-between text-gray-500 dark:text-gray-300">
          <em className="italic">{sectionHeading}</em>
        </h2>
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
      <div className={`${boxStyles} flex-auto w-full px-2 md:px-4 py-3`}>
        <TasksList area="overview" />
      </div>

      {!isLoading && (
        <div
          className={`flex-auto w-full px-2 md:px-4 py-3 text-xs text-right`}
        >
          <p>Estimated at {estimationText}</p>
        </div>
      )}
    </div>
  )

  return (
    <>
      <Seo title={pageTitle} />
      <section className={`${pagePadding}`}>
        {taskDashboard}

        <Alert style="info">
          {`Completed this task? `}
          <ButtonLink
            action={handleReset}
            text={'Start a new one'}
          ></ButtonLink>
        </Alert>
      </section>
    </>
  )
}

export default OverviewSection
