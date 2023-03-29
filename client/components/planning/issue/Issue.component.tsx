import Textarea from '@/components/forms/input/Textarea'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

type Props = {
  isEdit: boolean
  value: string
  action: (_arg: string) => void
}

const Issue = ({ isEdit, value, action }: Props) => {
  const editField = (
    <Textarea
      action={action}
      id={'issue'}
      label={'Description'}
      value={value}
    />
  )
  const displayField = (
    <div className="prose prose-neutral prose-sm prose-h1:mb-4 prose-h2:my-2">
      <ReactMarkdown>{value}</ReactMarkdown>
    </div>
  )
  return <div>{isEdit ? editField : displayField}</div>
}

export default Issue
