import React from 'react'
import { boxStyles } from '../../common/common'
import Input from '../../forms/input/Input.component'

interface Props {
  value: string
  action: {
    onUpdate: (_arg: string) => void
  }
}

const Scratchpad = ({ value, action }: Props) => {
  return (
    <div className={`${boxStyles} mt-6 mb-4 px-2 md:px-4 pt-3 pb-6`}>
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label inline-block font-bold mt-0 mb-3"
      >
        Scratchpad
      </label>
      <Input
        id="scratchpad"
        type="textarea"
        label="Start typing your notes..."
        action={action.onUpdate}
        value={value}
      />
    </div>
  )
}

export default Scratchpad
