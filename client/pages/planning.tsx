import type { NextPage } from 'next'
import PlanningPage from '../components/planning/PlanningPage'
import PublicLayout from '../components/layouts/PublicLayout'
import Seo from '../components/Seo'

const Planning: NextPage = () => {
  return (
    <>
      <Seo />
      <PublicLayout>
        <PlanningPage />
      </PublicLayout>
    </>
  )
}

export default Planning
