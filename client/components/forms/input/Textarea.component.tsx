import React from 'react'
import { inputStyle } from './style'

interface Props {
  value: string
  action: (arg: string) => void
  placeholder: string
  customStyles?: string
}

const Textarea = ({ value, action, placeholder, customStyles }: Props) => {
  return (
    <textarea
      className={`${styles} ${customStyles}`}
      rows={3}
      id="textarea"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        action(e.target.value)
      }}
    />
  )
}

const styles = `block h-48 resize-none ${inputStyle}`

export default Textarea
