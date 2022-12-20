import React from 'react'

interface Props {
  text: string
  action: () => void
  isDisabled?: boolean
  style?: string
}

const ButtonPrimary = ({ text, action, isDisabled, style = '' }: Props) => {
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

const buttonStyles = `inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xl leading-tight
  uppercase rounded shadow-md hover:bg-blue-600 cursor-pointer hover:shadow-lg focus:bg-blue-600 focus:shadow-lg
  focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg disabled:opacity-25 transition duration-150 ease-in-out`

export default ButtonPrimary
