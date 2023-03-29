import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import service from '../../services/service'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'

const HeroSection = () => {
  const router = useRouter()
  const [hasTaskInProgress, setHasTaskInProgress] = useState(false)

  const goToPlanning = () => {
    router.push('/planning')
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
    <section className="py-8 sm:py-16 md:py-24 flex items-center justify-center">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-gray-600">
            Do one thing at a time, do it well with Dolooper.
          </p>
          <h1 className="my-3 sm:my-4 md:my-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-10 tracking-tight text-black">
            Productivity tool for <span className="text-blue-700">doers</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-800">
            Say goodbye to multitasking and hello to streamlined productivity
            with Dolooper. Streamline your productivity with{' '}
            <span className="font-bold">One Task Focus</span>,{' '}
            <span className="font-bold">Clear Planning</span>,{' '}
            <span className="font-bold">Time-Boxing</span>, and{' '}
            <span className="font-bold">Markdown support</span>.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          {hasTaskInProgress ? (
            <ButtonPrimary text={`Continue`} action={goToOverview} />
          ) : (
            <ButtonPrimary text={`Get started!`} action={goToPlanning} />
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
