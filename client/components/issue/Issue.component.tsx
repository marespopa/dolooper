import React from 'react'
import Input from '../forms/input/Input.component'

type Props = {
  isEdit: boolean
  value: string
  action: (arg: string) => void
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
  const displayField = <p>{value}</p>
  return <div>{isEdit ? editField : displayField}</div>
}

export default Issue
