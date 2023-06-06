import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import service from '../../services/service'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'
import HeroImage from './HeroImage'
import { toast } from 'react-toastify'

const HeroSection = () => {
  const router = useRouter()
  const TIME_TO_REROUTE = 5 * 1000 // ms
  const [hasTaskInProgress, setHasTaskInProgress] = useState(false)
  const [messageShown, setMessageShown] = useState(false)

  const goToPlanning = () => {
    router.push('/planning')
  }

  const goToOverview = () => {
    router.push('/overview')
  }

  useEffect(() => {
    service.hasEntries().then((isInProgress) => {
      setHasTaskInProgress(isInProgress ? true : false)
      if (isInProgress) {
        messageShown &&
          toast.success('Existing task found. Taking you to the dashboard.')
        setMessageShown(true)
        setTimeout(() => {
          goToOverview()
        }, TIME_TO_REROUTE)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageShown])

  return (
    <section className="flex flex-col sm:flex-row justify-between mt-2 sm:mt-8 md:mt-16">
      <div className="relative px-4 sm:px-0 py-16 pr-4 flex-1">
        <h1 className="font-bold text-4xl sm:text-5xl leading-tight mb-6">
          Streamline Your Work <span className="text-blue-500">One Task</span>{' '}
          at a Time
        </h1>
        <h2 className="text-xl leading-relaxed mt-3">
          Dolooper revolutionizes your workday by focusing on one task at a
          time. Break down your tasks, utilize a customizable timer, and achieve
          optimal productivity.
        </h2>

        <div className="mt-4 sm:mt-8 md:mt-10">
          {hasTaskInProgress ? (
            <ButtonPrimary text={`Continue`} action={goToOverview} />
          ) : (
            <ButtonPrimary
              text={`Get Started for Free`}
              action={goToPlanning}
            />
          )}
        </div>
      </div>

      <div className="flex-1">
        <HeroImage />
      </div>
    </section>
  )
}

export default HeroSection
