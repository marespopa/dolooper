import React from 'react'
import Container from '../container'
import FeatureSection from './FeatureSection'
import HeroSection from './HeroSection'
import UsedBySection from './UsedBySection'

const LandingPage = () => {
  return (
    <section>
      <Container>
        <HeroSection />
        <FeatureSection />
        <UsedBySection />
      </Container>
    </section>
  )
}

export default LandingPage
