import type { NextPage } from 'next'
import PublicLayout from '../components/layouts/PublicLayout'
import LandingPage from '../components/landing/LandingPage'
import Seo from '../components/Seo'

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <PublicLayout>
        <LandingPage />
      </PublicLayout>
    </>
  )
}

export default Home
