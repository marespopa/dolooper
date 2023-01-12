import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Container from '../container'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'
import service from '../../services/service'

const LandingSection = () => {
  const router = useRouter()
  const [hasTaskInProgress, setHasTaskInProgress] = useState(false)
  const goToJourney = () => {
    router.push('/journey')
  }

  const goToOverview = () => {
    router.push('/overview')
  }

  useEffect(() => {
    service.hasEntries().then((isInProgress) => {
      setHasTaskInProgress(isInProgress ? true : false)
    })
  }, [])

  return (
    <section className="my-5">
      <Container>
        <div className="text-center  text-gray-700 py-20 px-6">
          <h1 className="text-5xl font-bold mt-0 mb-6">Welcome</h1>
          <p className={paragraphStyle}>
            {`Some hard truth. Multitasking doesn't work. You probably know the
          story of the hunter who tries to shoot two rabbits at the same time.
          In case you don't, let me share with you the end result. He gets out
          with no rabbit. That's the same with software development. If we try to
          focus on more than one task at a time, we rarely give out our best
          effort.`}
          </p>
          <p className={paragraphStyle}>{`Devxloper comes out to help you.`}</p>

          {hasTaskInProgress ? (
            <ButtonPrimary text={`Continue`} action={goToOverview} />
          ) : (
            <ButtonPrimary text={`Start!`} action={goToJourney} />
          )}
        </div>
      </Container>
    </section>
  )
}

const paragraphStyle = 'my-5 mx-auto text-xl'

export default LandingSection
