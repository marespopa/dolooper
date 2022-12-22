import React, { useEffect, useState } from 'react'
import service from '../../../services/service'
import { boxStyles } from '../../common/common'
import Input from '../../forms/input/Input.component'
import SectionHeading from '../common/SectionHeading.component'

const PlanSection = () => {
  const [plan, setPlan] = useState('')

  useEffect(() => {
    service.getPlan().then((results) => {
      if (!results) {
        return
      }

      setPlan(results)
    })
  }, [])

  function updatePlan(value: string) {
    setPlan(value)
    service.setPlan(value)
  }

  return (
    <section>
      <SectionHeading
        title="Plan"
        description="What's your plan for this coding session?"
      />
      <div className={`${boxStyles} relative z-0 h-56 min-h-full p-4`}>
        <Input
          action={updatePlan}
          id={'plan'}
          label={'Define your plan'}
          value={plan}
          type="textarea"
        />
      </div>
    </section>
  )
}

export default PlanSection
