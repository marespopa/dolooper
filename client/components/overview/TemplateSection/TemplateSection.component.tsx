import Modal from '@/components/common/Modal'
import ButtonFontIcon from '@/components/forms/buttons/ButtonFontIcon'
import React, { useState } from 'react'
import { FaBook } from 'react-icons/fa'

export type TemplateVariant =
  | 'feature'
  | 'bug'
  | 'code_review'
  | 'generic'
  | 'todo'
  | 'blank'
  | 'tutorial'

type Template = {
  name: TemplateVariant
  label: string
  description: string
}

interface Props {
  handleTemplateChange: (_arg: TemplateVariant) => void
}

const TemplateSection = ({ handleTemplateChange }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const templateList: Array<Template> = [
    {
      name: 'generic',
      label: 'Generic',
      description: 'Provides a flexible outline for any coding task.',
    },
    {
      name: 'feature',
      label: 'Feature',
      description: 'Plan the development of a new feature, step by step.',
    },
    {
      name: 'bug',
      label: 'Bug',
      description:
        'Document the steps to reproduce a bug and outline a potential fix.',
    },
    {
      name: 'code_review',
      label: 'Code Review ',
      description: 'Create a systematic checklist for evaluating code quality.',
    },
    {
      name: 'todo',
      label: 'To Do List',
      description: 'Your daily todo list.',
    },
    {
      name: 'blank',
      label: 'Blank',
      description: 'Start with a clean slate for maximum customization.',
    },
  ]

  return (
    <div className="max-w-[250px]">
      <ButtonFontIcon
        action={() => setIsModalOpen(true)}
        title="Select from a template"
      >
        <FaBook />
      </ButtonFontIcon>
      {renderModal()}
    </div>
  )

  function renderModal() {
    return (
      <Modal isOpen={isModalOpen} onModalClose={() => setIsModalOpen(false)}>
        <div className="my-2 flex flex-wrap gap-2">
          <h2 className="text-xl leading-tight">
            Start Your Coding Session with a Structure
          </h2>
          <p className="text-sm">
            Whether you&apos;re tackling a new feature, debugging an issue, or
            reviewing code, templates offer a proven framework to guide your
            process and reduce decision fatigue.
          </p>
          <table className="min-w-full divide-y divide-gray-300 dark:divide-slate-500">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-600">
              {templateList.map((template) => (
                <tr key={template.name}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ButtonFontIcon
                      action={() => {
                        onTemplateSelect(template.name)
                      }}
                    >
                      {template.label}
                    </ButtonFontIcon>
                  </td>
                  <td className="px-6 py-4 whitespace-normal">
                    {template.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    )
  }

  function onTemplateSelect(variant: TemplateVariant) {
    setIsModalOpen(false)
    handleTemplateChange(variant)
  }
}

export default TemplateSection
