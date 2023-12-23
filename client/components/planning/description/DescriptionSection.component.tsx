import React from 'react'
import SectionHeading from '../common/SectionHeading.component'
import Description from './Description.component'
import { useAtom } from 'jotai'
import { atom_description } from 'jotai/atoms'

interface Props {
  isOverview?: boolean
}

const DescriptionSection = ({ isOverview = false }: Props) => {
  const [description, setDescription] = useAtom(atom_description)
  const headingContent = {
    title: isOverview ? 'Working on' : "Let's start",
    description: isOverview
      ? ''
      : 'What are you trying to achieve in this session?',
  }

  function updateDescription(value: string) {
    setDescription(value)
  }

  return (
    <section>
      <SectionHeading
        title={headingContent.title}
        description={headingContent.description}
        subHeading={'* You can use markdown for writing the description'}
      />
      <div className={`sm:relative sm:z-0 min-h-full py-2`}>
        <Description
          value={description}
          handleUpdateValue={updateDescription}
        />
      </div>
    </section>
  )
}

export default DescriptionSection
