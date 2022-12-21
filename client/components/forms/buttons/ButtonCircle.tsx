import React from 'react'

interface Props {
  text: string
  action: () => void
  isDisabled?: boolean
  style?: string
}

const ButtonCircle = ({ text, action, isDisabled, style = '' }: Props) => {
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

const buttonStyles = `mx-auto w-8 h-8 rounded-full text-white font-medium text-xl leading-tight
                      uppercase shadow-md cursor-pointer
                      border border-gray-800 bg-gray-600
                      hover:bg-gray-800 hover:shadow-lg hover:outline-none hover:ring-0
                      focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0
                      active:bg-gray-800 active:shadow-lg disabled:opacity-25 transition duration-150 ease-in-out`

export default ButtonCircle
