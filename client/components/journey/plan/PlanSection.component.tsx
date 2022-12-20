import React, { useEffect, useState } from 'react'
import service from '../../../services/service'
import Input from '../../forms/input/Input.component'

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
      <div className=" w-full ">
        <h2 className="text-3xl font-bold mt-3 mb-3">{`Plan!`}</h2>
        <p className="my-5 mx-auto text-xl">{`What's your plan for this coding session?`}</p>
      </div>
      <div className="relative z-0">
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
