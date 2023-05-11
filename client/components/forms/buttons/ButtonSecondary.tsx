import React from 'react'

type SecondaryButtonVariants = 'error' | 'default' | 'success' | 'outline'

interface Props {
  text: string
  variant?: SecondaryButtonVariants
  action: () => void
  isDisabled?: boolean
  style?: string
}

const ButtonSecondary = ({
  text,
  variant = 'default',
  action,
  isDisabled,
  style = '',
}: Props) => {
  return (
    <button
      className={`${buttonStyles(variant)} ${style}`}
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

const buttonStyles = (variant: SecondaryButtonVariants) => {
  switch (variant) {
    case 'success':
      return successStyles
    case 'error':
      return errorStyles
    case 'outline':
      return outlineStyles
    default:
      return defaultStyles
  }
}

const commonStyles = `inline-block px-6 py-2.5 font-medium text-lg leading-tight
                      border
                      active:shadow-lg
                      cursor-pointer disabled:opacity-25 transition duration-150 ease-in-out
                      transition-all duration-100`

const defaultStyles = `${commonStyles}
                        text-white
                        border-gray-700 bg-gray-600
                        hover:bg-gray-800
                        focus:bg-gray-800
                        dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900`

const outlineStyles = `${commonStyles}
                        text-gray-600
                        border-gray-700 bg-transparent
                        hover:bg-gray-300
                        focus:bg-gray-300
                        dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-900`

const successStyles = `${commonStyles}
                        text-white
                        border-teal-600 bg-teal-500
                        hover:bg-teal-600
                        focus:bg-teal-600
                        dark:border-teal-800 dark:bg-teal-700 dark:text-teal-200 dark:hover:bg-teal-800`

const errorStyles = `${commonStyles}
                        text-white
                        border-red-600 bg-red-500
                        hover:bg-red-600
                        focus:bg-red-600
                        dark:border-red-800 dark:bg-red-700 dark:text-red-200 dark:hover:bg-red-800`

export default ButtonSecondary
