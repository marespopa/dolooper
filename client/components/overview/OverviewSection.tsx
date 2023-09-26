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
import NoteSection from '../planning/note/NoteSection'
import ButtonSecondary from '../forms/buttons/ButtonSecondary'
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
  const [isTimerMinimized, setIsTimerMinimized] = useState(false)
  const [showNotepad, setShowNotepad] = useState(true)

  const pageTitle = 'Work - Dolooper'

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
        <section>
          <Issue
            handleUpdateValue={issue.action.onUpdate}
            value={issue.value}
          />
        </section>

        <section className={boxStyles}>
          <TasksList area="overview" />
        </section>

        <section className={boxStyles}>
          <ButtonSecondary
            text={`${showNotepad ? 'Hide' : 'Show'} Notepad`}
            action={() => setShowNotepad(!showNotepad)}
          />
          {showNotepad && <NoteSection />}
        </section>

        <section className={`${timerPopStyles}`}>
          <h2
            className="font-bold flex justify-between cursor-pointer"
            onClick={() => toggleTimerWindow()}
          >
            <span>Timer</span>
            <ButtonIcon
              variant={isTimerMinimized ? 'maximize' : 'minimize'}
              action={() => toggleTimerWindow()}
            />
          </h2>
          {!isTimerMinimized && <Timer />}
        </section>
      </div>
    )
  }

  function toggleTimerWindow() {
    setIsTimerMinimized(!isTimerMinimized)
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
                        dark:bg-gray-800 dark:text-white dark:border-gray-600 sm:opacity-95`

export default OverviewSection
