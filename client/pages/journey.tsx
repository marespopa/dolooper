import type { NextPage } from 'next'
import JourneySection from '../components/journey/JourneySection.component'
import PublicLayout from '../components/layouts/PublicLayout'
import Seo from '../components/Seo'

const Journey: NextPage = () => {
  return (
    <>
      <Seo />
      <PublicLayout>
        <JourneySection />
      </PublicLayout>
    </>
  )
}

export default Journey
