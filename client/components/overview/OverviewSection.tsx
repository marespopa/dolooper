import React, { useState } from 'react'
import Alert from '../banners/Alert'
import { pagePadding } from '../common/common'
import ButtonIcon from '../forms/buttons/ButtonIcon'
import ButtonLink from '../forms/buttons/ButtonLink'
import Issue from '../planning/issue/Issue.component'
import TasksList from '../planning/tasks/TasksList'
import Seo from '../Seo'
import Timer from '../timer'
import Greeting from '../planning/greeting/Greeting.component'
type Props = {
  issue: {
    value: string
    action: {
      onUpdate: (_arg: string) => void
    }
  }
  handleReset: () => void
}

const OverviewSection = ({ issue, handleReset }: Props) => {
  const [isIssueEditable, setIsIssueEditable] = useState(false)
  const pageTitle = 'Work - Dolooper'
  const sectionHeading = 'Currently working on'

  return (
    <>
      <Seo title={pageTitle} />
      <section className={`${pagePadding}`}>
        <Greeting />
        {renderTaskDashboard()}
        {renderInfoMessages()}
      </section>
    </>
  )

  function renderTaskDashboard() {
    return (
      <div className="my-4 md:md-0">
        <section
          className={`${boxStyles} relative`}
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
            handleUpdateValue={issue.action.onUpdate}
            value={issue.value}
            isEdit={isIssueEditable}
          />
          <div className="absolute -top-2 -right-2 opacity-90">
            <ButtonIcon
              variant="edit"
              action={() => setIsIssueEditable(!isIssueEditable)}
            ></ButtonIcon>
          </div>
        </section>

        <section className={boxStyles}>
          <TasksList area="overview" />
        </section>

        <section className={`${timerPopStyles}`}>
          <h2 className="font-bold mt-0 mb-3">Timer</h2>
          <Timer />
        </section>
      </div>
    )
  }

  function renderInfoMessages() {
    return (
      <Alert style="info">
        {`Completed this task? `}
        <ButtonLink action={handleReset} text={'Start a new one'}></ButtonLink>
      </Alert>
    )
  }
}

const boxStyles = `bg-white shadow-sm px-2 md:px-4 py-3 my-4 rounded-md
                   dark:bg-gray-600 dark:text-white dark:border-gray-600`
const timerPopStyles = `bg-amber-200 shadow-sm px-2 md:px-4 py-3 my-4 rounded-md
                        w-full sm:w-1/2 z-10 md:w-1/4 sm:fixed sm:right-4 sm:bottom-2
                        dark:bg-gray-800 dark:text-white dark:border-gray-600 sm:opacity-90`
export default OverviewSection
