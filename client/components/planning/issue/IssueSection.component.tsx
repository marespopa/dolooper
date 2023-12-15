import React, { useEffect, useState } from 'react'
import StorageService from '../../../services/storageService'
import SectionHeading from '../common/SectionHeading.component'
import Issue from './Issue.component'
import { INITIAL_DESCRIPTION } from './INITIAL_DESCRIPTION'

const IssueSection = () => {
  const [description, setDescription] = useState(INITIAL_DESCRIPTION)

  useEffect(() => {
    StorageService.getDescription().then((results) => {
      if (results) {
        setDescription(results)
      }
    })
  }, [])

  function updateDescription(value: string) {
    setDescription(value)
    StorageService.setDescription(value)
  }

  return (
    <section>
      <SectionHeading
        title="Let's start!"
        description="What are you trying to achieve in this session?"
        subHeading={'* You can use markdown for writing the description'}
      />
      <div className={`relative z-0 min-h-full py-2`}>
        <Issue value={description} handleUpdateValue={updateDescription} />
      </div>
    </section>
  )
}

export default IssueSection
