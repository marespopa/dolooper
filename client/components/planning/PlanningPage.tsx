import dynamic from 'next/dynamic'
import React from 'react'
import { pagePadding } from '../common/common'
import Seo from '../Seo'
import Loading from '../loading/Loading'
import Container from '../container'

const PlanningSection = dynamic(() => import('./PlanningSection'), {
  loading: () => <Loading />,
})
export const PLANNING_PAGE_TITLE = 'Dolooper - Plan Your Session'

const PlanningPage = () => {
  const pageTitle = PLANNING_PAGE_TITLE

  return (
    <div className={`py-5 ${pagePadding}`}>
      <Seo title={pageTitle} />
      <Container>
        <PlanningSection />
      </Container>
    </div>
  )
}

export default PlanningPage
