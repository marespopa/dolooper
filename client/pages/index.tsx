import type { NextPage } from 'next'
import LandingPageLayout from '../components/layouts/LandingPageLayout'
import LandingPage from '../components/landing/LandingPage'
import Seo from '../components/Seo'

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <LandingPageLayout>
        <LandingPage />
      </LandingPageLayout>
    </>
  )
}

export default Home
