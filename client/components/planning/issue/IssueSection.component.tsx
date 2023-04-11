import React, { useEffect, useState } from 'react'
import service from '../../../services/service'
import SectionHeading from '../common/SectionHeading.component'
import Issue from './Issue.component'

const IssueSection = () => {
  const [issue, setDescription] = useState(``)

  useEffect(() => {
    service.getDescription().then((results) => {
      if (results) {
        setDescription(results)
      }
    })
  }, [])

  function updateDescription(value: string) {
    setDescription(value)
    service.setDescription(value)
  }

  return (
    <section>
      <SectionHeading
        title="To do"
        description="What are you trying to achieve today?"
        subHeading={'* You can use markdown for writing the description'}
      />
      <div className={`relative z-0 min-h-full py-2`}>
        <Issue isEdit={true} value={issue} action={updateDescription} />
      </div>
    </section>
  )
}

export default IssueSection
