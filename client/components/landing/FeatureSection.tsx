import React from 'react'
import Feature from './Feature'

const FeatureSection = () => {
  return (
    <section className="pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <Feature
            title="One task"
            description={`You are allowed to work on only one task at a time.
                        So-called multitasking divides our attention. For example, in studies,
                        attempting to complete additional tasks during a driving simulation led to
                        poorer driving performance.`}
          />

          <Feature
            title="Clear plan"
            description={`
                It helps break down the issue into smaller pieces and distribute tasks when applicable.
                Even if you're the only one facing the dilemma, planning turns a larger,  more abstract thing
                into bite-sized activities.`}
          />

          <Feature
            title="Time-box"
            description={`It forces you to set an estimation to your task. By defining upfront how long a task
                          will take, you fight procrastination, which helps with focusing on the task at hand.
                          It also helps ignore distractions and prioritize it since there is a deadline to be met.`}
          />
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
