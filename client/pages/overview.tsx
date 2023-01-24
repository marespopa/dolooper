import type { NextPage } from 'next'
import OverviewSection from '../components/overview'
import PublicLayout from '../components/layouts/PublicLayout'
import Seo from '../components/Seo'

const Planning: NextPage = () => {
  return (
    <>
      <Seo />
      <PublicLayout>
        <OverviewSection />
      </PublicLayout>
    </>
  )
}

export default Planning
