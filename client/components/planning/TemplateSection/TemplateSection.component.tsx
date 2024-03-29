import ButtonSecondary from '@/components/forms/buttons/ButtonSecondary'
import { useAtom } from 'jotai'
import { atom_description, atom_title } from 'jotai/atoms'
import React from 'react'
import { DEFAULT_TEMPLATES } from './templates'

type TemplateVariant = 'feature' | 'bug' | 'code_review' | 'generic'

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
  ]

  return (
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
  )
}

export default TemplateSection
