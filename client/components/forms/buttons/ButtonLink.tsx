import React from 'react'

interface Props {
  text: string
  action: () => void
  isDisabled?: boolean
  style?: string
}

const ButtonLink = ({ text, action, isDisabled, style = '' }: Props) => {
  return (
    <button
      className={`${buttonStyles} ${style}`}
      role="link"
      onClick={action}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}

const buttonStyles = `text-gray-800 underline dark:text-gray-300`

export default ButtonLink
