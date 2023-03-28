import React from 'react'
import Feature from './Feature'

const FEATURES = [
  {
    id: 1,
    title: 'One Task Focus',
    description: `Work on only one task at a time for improved concentration and productivity`,
  },
  {
    id: 2,
    title: 'Clear Planning',
    description: `Break down complex tasks into manageable pieces for easier prioritization and success`,
  },
  {
    id: 3,
    title: 'Time-Boxing',
    description: `Set time estimates for tasks to fight procrastination, prioritize work, and accomplish more in less time. Plus, our app supports markdown for easy formatting and organization.`,
  },
]
const FeatureSection = () => {
  return (
    <section className="pb-10">
      <div className="container mx-auto px-4">
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
