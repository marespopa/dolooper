import React from 'react'
import { inputStyle } from './style'

interface Props {
  value: string
  action: (arg: string) => void
  placeholder: string
  customStyles?: string
}
const Input = ({ value, action, placeholder, customStyles }: Props) => {
  return (
    <input
      className={`${styles} ${customStyles}`}
      value={value}
      onChange={(e) => {
        action(e.target.value)
      }}
      placeholder={placeholder}
    />
  )
}

const styles = inputStyle

export default Input
