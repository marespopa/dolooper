import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import React from 'react'
import Container from '../container'
import { pagePadding } from '../common/common'
import Greeting from './greeting/Greeting.component'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'
import Seo from '../Seo'
import Loading from '../loading/Loading'

const DescriptionSection = dynamic(
  () => import('./description/DescriptionSection.component'),
  {
    loading: () => <Loading />,
  },
)
export const PLANNING_PAGE_TITLE = 'Dolooper - Plan Your Session'

const PlanningPage = () => {
  const router = useRouter()
  const pageTitle = PLANNING_PAGE_TITLE

  const handleCompletePlanning = async () => {
    router.push('/overview')
  }

  return (
    <div className={`py-5 ${pagePadding}`}>
      <Seo title={pageTitle} />
      <Container>
        <Greeting />
        <DescriptionSection />
        <div className="inline-flex my-8" role="button">
          <ButtonPrimary
            action={handleCompletePlanning}
            text={'Complete Planning'}
          />
        </div>
      </Container>
    </div>
  )
}

export default PlanningPage
