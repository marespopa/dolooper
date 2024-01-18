import React from 'react'
import { useRouter } from 'next/router'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'
import DescriptionSection from './description/DescriptionSection.component'
import Greeting from './greeting/Greeting.component'

const PlanningSection = () => {
  const router = useRouter()

  const handleCompletePlanning = async () => {
    router.push('/overview')
  }

  return (
    <>
      <Greeting />
      <DescriptionSection />
      <div className="inline-flex my-8" role="button">
        <ButtonPrimary
          action={handleCompletePlanning}
          text={'Complete Planning'}
        />
      </div>
    </>
  )
}

export default PlanningSection
