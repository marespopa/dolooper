import ButtonSecondary from '@/components/forms/buttons/ButtonSecondary'
import React from 'react'

export type TemplateVariant =
  | 'feature'
  | 'bug'
  | 'code_review'
  | 'generic'
  | 'blank'
  | 'tutorial'

type Template = {
  id: number
  name: TemplateVariant
  label: string
}

interface Props {
  handleTemplateChange: (_arg: TemplateVariant) => void
}

const TemplateSection = ({ handleTemplateChange }: Props) => {
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

  return (
    <>
      <div className="my-2 flex flex-wrap gap-2">
        {templateList.map((template) => (
          <ButtonSecondary
            key={template.id}
            action={() => handleTemplateChange(template.name)}
            style={template.name === 'tutorial' ? 'bg-blue-300' : ''}
          >
            {template.label}
          </ButtonSecondary>
        ))}
      </div>
    </>
  )
}

export default TemplateSection
