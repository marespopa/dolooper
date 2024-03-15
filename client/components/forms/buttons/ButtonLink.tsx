import React, { ReactElement } from 'react'

interface Props {
  children: string | ReactElement
  action: () => void
  isDisabled?: boolean
  style?: string
}

const ButtonLink = ({ children, action, isDisabled, style = '' }: Props) => {
  return (
    <button
      className={`${buttonStyles} ${style}`}
      role="link"
      onClick={action}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

const buttonStyles = `text-gray-800 underline dark:text-gray-300`

export default ButtonLink
