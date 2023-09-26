import React from 'react'

interface Props {
  text: string
  action: () => void
  isDisabled?: boolean
  style?: string
}

const ButtonAlternate = ({ text, action, isDisabled, style = '' }: Props) => {
  return (
    <button
      className={`${buttonStyles} ${style}`}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={action}
      role="button"
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}

const buttonStyles = `bg-amber-200 hover:bg-amber-300 ml-0 px-4 py-2 transition-all duration-150 ease-in-out text-gray-700
                      dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900`

export default ButtonAlternate
