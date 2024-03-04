import React from 'react'
import SectionHeading from '../common/SectionHeading.component'
import Description from './Description.component'
import { useAtom } from 'jotai'
import { atom_description, atom_title } from 'jotai/atoms'
import Input from '@/components/forms/input/Input'

interface Props {
  isOverview?: boolean
}

const DescriptionSection = ({ isOverview = false }: Props) => {
  const [description, setDescription] = useAtom(atom_description)
  const [title, setTitle] = useAtom(atom_title)

  const headingContent = {
    title: isOverview ? title : 'Ready to dive in?',
    description: isOverview ? '' : `What's your goal for this session?`,
  }

  function updateDescription(value: string) {
    setDescription(value)
  }

  function updateTitle(title: string) {
    setTitle(title)
  }

  return (
    <section>
      <SectionHeading
        title={headingContent.title}
        description={headingContent.description}
        subHeading={
          isOverview
            ? ''
            : '* You should use markdown for writing the description'
        }
      />
      {!isOverview && (
        <Input
          id={`taskTitle`}
          value={title}
          action={updateTitle}
          label="Title"
        />
      )}
      <div className={`sm:relative sm:z-0 min-h-full py-2 mt-4`}>
        <Description
          hasPreview={isOverview}
          value={description}
          handleUpdateValue={updateDescription}
        />
      </div>
    </section>
  )
}

export default DescriptionSection
