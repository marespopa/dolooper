import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { pagePadding } from '../common/common'
import ConfettiExplosion from 'react-confetti-explosion'

import { Provider, createStore } from 'jotai'

import ButtonLink from '../forms/buttons/ButtonLink'
import Alert from '../banners/Alert'
import Seo from '../Seo'
import Greeting from '../planning/greeting/Greeting.component'
import Loading from '../loading/Loading'
const TasksList = dynamic(() => import('../planning/tasks/TasksList'), {
  loading: () => <Loading />,
})

const Timer = dynamic(() => import('../timer'), {
  loading: () => <Loading />,
})
const SnippetsSection = dynamic(
  () => import('../planning/snippets/SnippetsSection'),
  {
    loading: () => <Loading />,
  },
)
const DescriptionSection = dynamic(
  () => import('../planning/description/DescriptionSection.component'),
  {
    loading: () => <Loading />,
  },
)

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
        {renderTaskDashboard()}
        {renderInfoMessages()}
      </section>
    </Provider>
  )

  function renderTaskDashboard() {
    return (
      <div className="my-4 md:md-0">
        <Timer />
        <DescriptionSection isOverview={true} />

        <section className={boxStyles}>
          <TasksList area="overview" />
        </section>

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
        {`Completed this task? `}
        <ButtonLink
          action={() => markTaskAsCompleted()}
          text={'Start a new one'}
        ></ButtonLink>
        {showConfetti && <ConfettiExplosion {...confettiConfigProps} />}
      </Alert>
    )
  }

  function markTaskAsCompleted() {
    setShowConfetti(true)
    setTimeout(() => handleReset(), CONFETTI_TIMER - 1000)
  }
}

export const boxStyles = `bg-white shadow-sm px-2 md:px-4 py-3 my-4 rounded-md
                   dark:bg-gray-600 dark:text-white dark:border-gray-600`

export default OverviewSection
