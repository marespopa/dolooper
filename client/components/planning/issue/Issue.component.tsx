import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Input from '../../forms/input/Input.component'

type Props = {
  isEdit: boolean
  value: string
  action: (_arg: string) => void
}

const Issue = ({ isEdit, value, action }: Props) => {
  const editField = (
    <Input
      action={action}
      id={'issue'}
      label={'Description'}
      value={value}
      type="textarea"
    />
  )
  const displayField = (
    <div className="prose">
      <ReactMarkdown>{value}</ReactMarkdown>
    </div>
  )
  return <div>{isEdit ? editField : displayField}</div>
}

export default Issue
