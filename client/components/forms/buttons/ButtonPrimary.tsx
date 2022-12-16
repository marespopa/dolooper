import React from 'react'

interface Props {
  text: string
  action: () => void
}

const ButtonPrimary = ({ text, action }: Props) => {
  return (
    <button
      className={buttonStyles}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={action}
      role="button"
    >
      {text}
    </button>
  )
}

const buttonStyles = `inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xl leading-tight
  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`

export default ButtonPrimary
