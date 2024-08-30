import { useRouter } from 'next/router'
import React from 'react'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'
import HeroImage from './HeroImage'

const HeroSection = () => {
  const router = useRouter()

  const goToTask = () => {
    router.push('/overview')
  }

  return (
    <section className="flex flex-col sm:flex-row justify-between mt-2 sm:mt-8 md:mt-16">
      <div className="relative px-4 sm:px-0 py-16 pr-4 flex-1">
        <h1 className="font-bold text-4xl sm:text-5xl leading-tight mb-6">
          From Complex Task to{' '}
          <span className="text-blue-500"> Completed Code.</span>
        </h1>
        <h2 className="text-xl leading-relaxed mt-3">
          Achieve your coding goals one step at a time. Dolooper provides the
          structure to stay focused and deliver your best work.
        </h2>
        <h2 className="text-xl leading-relaxed mt-3">
          And you don&quote;t even need to login. All the data is safely stored in your browser memory, making it incognito out of the box.
        </h2>
        <div className="mt-4 sm:mt-8 md:mt-10">
          <ButtonPrimary action={goToTask}>
            Start{' '}
            <span className="text-xs align-super rotate-45">100% free</span>
          </ButtonPrimary>
        </div>
      </div>

      <div className="flex-1">
        <HeroImage />
      </div>
    </section>
  )
}

export default HeroSection
