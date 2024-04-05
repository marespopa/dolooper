import React, { ReactElement } from 'react'

interface Props {
  children: string | ReactElement
  action: () => void
  isDisabled?: boolean
  style?: string
  showAsLink?: boolean
}

const ButtonLink = ({
  children,
  showAsLink = false,
  action,
  isDisabled,
  style = '',
}: Props) => {
  return (
    <button
      className={`${buttonStyles(showAsLink)} ${style}`}
      role="link"
      onClick={action}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

const buttonStyles = (showAsLink: boolean) => {
  return `underline cursor-pointer ${
    showAsLink
      ? `text-blue-700 dark:text-blue-300 `
      : `text-gray-800 dark:text-gray-300`
  }`
}

export default ButtonLink
