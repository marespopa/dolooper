import React, { useEffect, useState } from 'react'
import service from '../../../services/service'
import Textarea from '../../forms/input/Textarea.component'

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
    <div className="mb-9">
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label inline-block font-bold mt-0 mb-3"
      >
        Plan
      </label>
      <Textarea
        placeholder="Describe it as clearly as you can"
        action={updatePlan}
        value={plan}
      />
    </div>
  )
}

export default PlanSection
