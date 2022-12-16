import type { NextPage } from 'next'
import OverviewSection from '../components/overview'
import PublicLayout from '../components/layouts/PublicLayout'
import Seo from '../components/Seo'

const Journey: NextPage = () => {
  return (
    <>
      <Seo />
      <PublicLayout>
        <OverviewSection />
      </PublicLayout>
    </>
  )
}

export default Journey
