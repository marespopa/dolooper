import type { NextPage } from 'next'
import OverviewPage from '../components/overview/OverviewPage'
import PublicLayout from '../components/layouts/PublicLayout'
import Seo from '../components/Seo'

const Planning: NextPage = () => {
  return (
    <>
      <Seo />
      <PublicLayout hasFlatBg={true}>
        <OverviewPage />
      </PublicLayout>
    </>
  )
}

export default Planning
