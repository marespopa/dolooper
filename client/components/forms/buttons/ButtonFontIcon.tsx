import React, { ReactNode } from 'react'

interface Props {
  action: () => void
  isDisabled?: boolean
  style?: string
  children: ReactNode
}

const ButtonFontIcon = ({
  children,
  action,
  isDisabled,
  style = '',
}: Props) => {
  return (
    <button
      className={`${buttonStyles} ${style}`}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={action}
      role="button"
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

const buttonStyles = `bg-gray-300 hover:bg-gray-400 focus:bg-gray-400
                      dark:bg-gray-400 dark:hover:bg-gray-300 dark:focus:bg-gray-300
                      text-gray-800 font-bold p-2 rounded inline-flex items-center gap-2 
                      disabled:opacity-25 `

export default ButtonFontIcon
