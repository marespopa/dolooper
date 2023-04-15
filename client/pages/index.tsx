import type { NextPage } from 'next'
import LandingPage from '../components/landing/LandingPage'
import Seo from '../components/Seo'
import PublicLayout from '@/components/layouts/PublicLayout'

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
