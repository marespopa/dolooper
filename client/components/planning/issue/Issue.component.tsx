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
    <div className={fieldStyle}>
      <ReactMarkdown>{value}</ReactMarkdown>
    </div>
  )
  return <div>{isEdit ? editField : displayField}</div>
}

const fieldStyle = `prose prose-neutral prose-h1:mb-4 prose-h2:my-2 
   prose-p:px-0 max-w-fit prose-li:marker:text-amber-500
   dark:prose-invert dark:prose-li:marker:text-amber-200`

export default Issue
