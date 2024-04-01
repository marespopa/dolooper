import ButtonSecondary from '@/components/forms/buttons/ButtonSecondary'
import { useAtom } from 'jotai'
import { atom_description, atom_title } from 'jotai/atoms'
import React from 'react'
import { DEFAULT_TEMPLATES } from './templates'

type TemplateVariant = 'feature' | 'bug' | 'code_review' | 'generic' | 'blank'

type Template = {
  id: number
  name: TemplateVariant
  label: string
}

const TemplateSection = () => {
  const [, setTitle] = useAtom(atom_title)
  const [, setDescription] = useAtom(atom_description)

  function loadTemplate(variant: TemplateVariant) {
    setTitle(DEFAULT_TEMPLATES[variant].title)
    setDescription(DEFAULT_TEMPLATES[variant].description)
  }

  const templateList: Array<Template> = [
    {
      id: 0,
      name: 'generic',
      label: 'Generic',
    },
    {
      id: 1,
      name: 'feature',
      label: 'Feature',
    },
    {
      id: 2,
      name: 'bug',
      label: 'Bug',
    },
    {
      id: 3,
      name: 'code_review',
      label: 'Code Review ',
    },
    {
      id: 4,
      name: 'blank',
      label: 'Blank',
    },
  ]

  const headingContent = {
    title: 'Ready for a focused session?',
    description: `Define your task.`,
    subHeading: `Need a jump start? Start by clicking on a template below:`,
  }

  return (
    <>
      <div className="w-full">
        <h2 className="text-3xl font-bold mt-3 mb-3">{headingContent.title}</h2>
        <>
          <p className="my-5 mx-auto text-xl">{headingContent.description}</p>
          <p className="text-xs text-gray-500 -mt-4 mb-4 dark:text-gray-400">
            {headingContent.subHeading}
          </p>
        </>
      </div>
      <div className="my-2 flex flex-wrap gap-2">
        {templateList.map((template) => (
          <ButtonSecondary
            key={template.id}
            action={() => loadTemplate(template.name)}
          >
            {template.label}
          </ButtonSecondary>
        ))}
      </div>
    </>
  )
}

export default TemplateSection
