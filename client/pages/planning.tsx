import type { NextPage } from 'next'
import PlanningPage from '../components/planning/PlanningPage'
import Seo from '../components/Seo'
import PublicLayout from '@/components/layouts/PublicLayout'

const Planning: NextPage = () => {
  return (
    <>
      <Seo />
      <PublicLayout hasFlatBg={true}>
        <PlanningPage />
      </PublicLayout>
    </>
  )
}

export default Planning
