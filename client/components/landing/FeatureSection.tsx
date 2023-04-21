import React from 'react'
import Feature from './Feature'

const FEATURES = [
  {
    id: 1,
    title: 'One Task Focus',
    description: `Work on only one issue at a time for improved concentration and productivity`,
  },
  {
    id: 2,
    title: 'Time-Boxing',
    description: `Set time estimates for tasks to fight procrastination, prioritize work, and accomplish more in less time.`,
  },
  {
    id: 3,
    title: 'Markdown support',
    description: `It also supports markdown for easy formatting and organization.`,
  },
  {
    id: 4,
    title: 'Enhanced privacy and security',
    description: `Because your data is stored locally, it's less vulnerable to online attacks or data breaches.
      Plus, you have complete control over your data and can choose to delete it at any time.`,
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
