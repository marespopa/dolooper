import React from 'react'
import Alert from '../banners/Alert'
import { pagePadding } from '../common/common'
import ButtonLink from '../forms/buttons/ButtonLink'
import TasksList from '../planning/tasks/TasksList'
import Seo from '../Seo'
import Timer from '../timer'
import Greeting from '../planning/greeting/Greeting.component'
import SnippetsSection from '../planning/snippets/SnippetsSection'
import { Provider, createStore } from 'jotai'
import DescriptionSection from '../planning/description/DescriptionSection.component'
type Props = {
  handleReset: () => void
}
export const OVERVIEW_PAGE_TITLE = 'One Task - Dolooper'

const OverviewSection = ({ handleReset }: Props) => {
  const pageTitle = OVERVIEW_PAGE_TITLE
  const myStore = createStore()

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
    return (
      <Alert style="info">
        {`Completed this task? `}
        <ButtonLink action={handleReset} text={'Start a new one'}></ButtonLink>
      </Alert>
    )
  }
}

export const boxStyles = `bg-white shadow-sm px-2 md:px-4 py-3 my-4 rounded-md
                   dark:bg-gray-600 dark:text-white dark:border-gray-600`

export default OverviewSection
