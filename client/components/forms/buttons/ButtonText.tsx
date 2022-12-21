import React from 'react'

interface Props {
  text: string
  action: () => void
  isDisabled?: boolean
  style?: string
}

const ButtonText = ({ text, action, isDisabled, style = '' }: Props) => {
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

const buttonStyles = `inline-block px-6 py-2.5 text-gray-800 font-medium text-md leading-tight
                        border border-gray-600
                        hover:bg-gray-800 hover:text-white
                        focus:bg-gray-800 focus:text-white
                        active:shadow-lg
                        cursor-pointer disabled:opacity-25 transition duration-150 ease-in-out`

export default ButtonText
