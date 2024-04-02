import React from 'react'
import Feature from './Feature'

const FEATURES = [
  {
    id: 1,
    title: 'Effortless Task Management',
    description: `Focus on one task at a time and break it down into manageable subtasks.`,
  },
  {
    id: 2,
    title: 'Customizable Timer',
    description: `Boost your productivity with a flexible timer. Tailor it to your work style, whether you prefer the Pomodoro Technique or personalized intervals.`,
  },
  {
    id: 3,
    title: 'Markdown support',
    description: `Communicate effectively with Markdown formatting. Create well-structured tasks, add notes, and highlight essential details, ensuring clarity and understanding.`,
  },
  {
    id: 4,
    title: 'Secure Local Storage',
    description: `Rest easy knowing that your data is safe and secure. Dolooper stores your information locally, ensuring privacy and giving you peace of mind.`,
  },
]
const FeatureSection = () => {
  return (
    <section className="mt-4 sm:mt-8 md:mt-16 pb-10">
      <h3 className="text-2xl text-center leading-tight">
        With Markdown support for clear communication and secure local storage,
        Dolooper streamlines your workflow while ensuring data privacy.
      </h3>
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-wrap">
          {FEATURES.map(({ id, title, description }) => (
            <Feature key={id} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
