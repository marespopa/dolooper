import React, { useState } from 'react'
import { pagePadding } from '../common/common'
import ConfettiExplosion from 'react-confetti-explosion'

import { Provider, createStore } from 'jotai'

import ButtonLink from '../forms/buttons/ButtonLink'
import Alert from '../banners/Alert'
import Seo from '../Seo'
import Greeting from '../planning/greeting/Greeting.component'
import SnippetsSection from '../planning/snippets/SnippetsSection'
import TasksSection from '../planning/tasks/TasksSection.component'
import Timer from '../timer'
import MarkdownPreview from './MarkdownPreview'
import Tabs from '../tabs'
import { Tab, TabVariant } from '../tabs/Tabs'
import TaskDetails from '../planning/TaskDetails'

type Props = {
  handleReset: () => void
}

export const OVERVIEW_PAGE_TITLE = 'Dolooper - Focus Session'

const OverviewSection = ({ handleReset }: Props) => {
  const CONFETTI_TIMER = 5000
  const pageTitle = OVERVIEW_PAGE_TITLE
  const myStore = createStore()
  const [showConfetti, setShowConfetti] = useState(false)
  const [activeTab, setActiveTab] = useState<TabVariant>('details')

  return (
    <Provider store={myStore}>
      <Seo title={pageTitle} />
      <section className={`${pagePadding}`}>
        <Greeting />
        <div className={`${showConfetti && 'opacity-30'}`}>
          <span className="text-xs">Working on...</span>
          {renderTaskDashboard()}
        </div>
        {renderInfoMessages()}
      </section>
    </Provider>
  )

  function renderTaskDashboard() {
    const tabList: Array<Tab> = [
      {
        id: 1,
        name: 'details',
        label: 'Details',
      },
      {
        id: 2,
        name: 'edit',
        label: 'Edit',
      },
      {
        id: 3,
        name: 'subtasks',
        label: 'Subtasks',
      },
      {
        id: 4,
        name: 'snippets',
        label: 'Snippets',
      },
    ]

    return (
      <div className="my-4 md:md-0">
        <Tabs
          tabs={tabList}
          activeTab={activeTab}
          handleTabChange={(tab) => setActiveTab(tab)}
        />
        <Timer />
        {activeTab === 'details' && <MarkdownPreview />}
        {activeTab === 'edit' && <TaskDetails showHeading={false} />}
        {activeTab === 'subtasks' && <TasksSection />}
        {activeTab === 'snippets' && <SnippetsSection />}
      </div>
    )
  }

  function renderInfoMessages() {
    const confettiConfigProps = {
      force: 1.2,
      duration: CONFETTI_TIMER,
      particleCount: 250,
      width: 1600,
    }

    return (
      <>
        <Alert style="info">
          {showConfetti
            ? 'Congratulations! Starting up a new one...'
            : `Completed this task? `}
          {!showConfetti && (
            <ButtonLink
              action={() => markTaskAsCompleted()}
              text={'Start a new one'}
            ></ButtonLink>
          )}
          {showConfetti && <ConfettiExplosion {...confettiConfigProps} />}
        </Alert>
      </>
    )
  }

  function markTaskAsCompleted() {
    setShowConfetti(true)
    setTimeout(() => handleReset(), CONFETTI_TIMER - 1000)
  }
}

export default OverviewSection
