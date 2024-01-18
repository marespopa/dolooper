import React, { useState } from 'react'
import { pagePadding } from '../common/common'
import ConfettiExplosion from 'react-confetti-explosion'

import { Provider, createStore } from 'jotai'

import ButtonLink from '../forms/buttons/ButtonLink'
import Alert from '../banners/Alert'
import Seo from '../Seo'
import Greeting from '../planning/greeting/Greeting.component'
import DescriptionSection from '../planning/description/DescriptionSection.component'
import SnippetsSection from '../planning/snippets/SnippetsSection'
import TasksSection from '../planning/tasks/TasksSection.component'
import Timer from '../timer'

type Props = {
  handleReset: () => void
}

export const OVERVIEW_PAGE_TITLE = 'Dolooper - Focus Session'

const OverviewSection = ({ handleReset }: Props) => {
  const CONFETTI_TIMER = 5000
  const pageTitle = OVERVIEW_PAGE_TITLE
  const myStore = createStore()
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <Provider store={myStore}>
      <Seo title={pageTitle} />
      <section className={`${pagePadding}`}>
        <Greeting />
        <div className={`${showConfetti && 'opacity-30'}`}>
          {renderTaskDashboard()}
        </div>
        {renderInfoMessages()}
      </section>
    </Provider>
  )

  function renderTaskDashboard() {
    return (
      <div className="my-4 md:md-0">
        <Timer />
        <DescriptionSection isOverview={true} />
        <TasksSection />
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
    )
  }

  function markTaskAsCompleted() {
    setShowConfetti(true)
    setTimeout(() => handleReset(), CONFETTI_TIMER - 1000)
  }
}

export default OverviewSection
