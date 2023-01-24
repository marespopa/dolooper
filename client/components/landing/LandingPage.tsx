import React from 'react'
import Container from '../container'
import FeatureSection from './FeatureSection'
import HeroSection from './HeroSection'

const LandingPage = () => {
  return (
    <section>
      <Container>
        <HeroSection />
        <FeatureSection />
      </Container>
    </section>
  )
}

export default LandingPage
