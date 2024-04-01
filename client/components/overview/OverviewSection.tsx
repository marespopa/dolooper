import React, { useState } from 'react'
import { pagePadding } from '../common/common'
import ConfettiExplosion from 'react-confetti-explosion'

import { Provider, createStore } from 'jotai'

import ButtonLink from '../forms/buttons/ButtonLink'
import Alert from '../banners/Alert'
import Seo from '../Seo'
import SnippetsSection from './SnippetsSection/SnippetsSection'
import Timer from '../timer'
import MarkdownPreview from './MarkdownPreview'
import Tabs from '../tabs'
import { Tab, TabVariant } from '../tabs/Tabs'
import TaskDetails from './TaskDetails'
import SubtasksSection from './SubtasksSection'
import Greeting from '../common/Greeting'
import TemplateSection from './TemplateSection'
import NotesSection from './NotesSection'

type Props = {
  handleReset: () => void
}

export const OVERVIEW_PAGE_TITLE = 'Dolooper - Timer'

const OverviewSection = ({ handleReset }: Props) => {
  const CONFETTI_TIMER = 5000
  const pageTitle = OVERVIEW_PAGE_TITLE
  const myStore = createStore()
  const [showConfetti, setShowConfetti] = useState(false)
  const [activeTab, setActiveTab] = useState<TabVariant>('edit')

  return (
    <Provider store={myStore}>
      <Seo title={pageTitle} />
      <section className={`${pagePadding}`}>
        <Greeting />
        <div className={`${showConfetti && 'opacity-30'}`}>
          {renderTaskDashboard()}
        </div>
      </section>
    </Provider>
  )

  function renderTaskDashboard() {
    const tabList: Array<Tab> = [
      {
        id: 1,
        name: 'edit',
        label: 'Plan & Write',
      },
      {
        id: 2,
        name: 'preview',
        label: 'Focused Task',
      },
    ]

    return (
      <div className="my-4 md:md-0">
        {activeTab === 'edit' && (
          <>
            <TemplateSection />
            <TaskDetails />
          </>
        )}
        {activeTab === 'preview' && <MarkdownPreview />}

        <Tabs
          tabs={tabList}
          activeTab={activeTab}
          handleTabChange={(tab) => setActiveTab(tab)}
        />
        {activeTab === 'preview' && renderInfoMessages()}
        <Timer />
        <div className="grid md:grid-cols-2	md:gap-8">
          <SubtasksSection />
          <NotesSection />
        </div>
        <SnippetsSection />
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
            <ButtonLink action={() => markTaskAsCompleted()}>
              Start a new one
            </ButtonLink>
          )}
          {showConfetti && <ConfettiExplosion {...confettiConfigProps} />}
        </Alert>
      </>
    )
  }

  function markTaskAsCompleted() {
    setShowConfetti(true)
    setTimeout(() => {
      handleReset()
      setShowConfetti(false)
    }, CONFETTI_TIMER - 1000)
  }
}

export default OverviewSection
