import React from 'react'

interface Props {
  children: string | React.ReactElement
  action: () => void
  isDisabled?: boolean
  style?: string
}

const ButtonCircle = ({ children, action, isDisabled, style = '' }: Props) => {
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

const buttonStyles = `w-6 h-6 rounded-full text-white font-medium text-xs leading-tight
                      uppercase shadow-md cursor-pointer
                      border border-gray-800 dark:border-slate-600 bg-gray-600
                      hover:bg-gray-800 hover:shadow-lg hover:outline-none hover:ring-0
                      flex justify-center items-center
                      focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0
                      disabled:pointer-events-none active:bg-gray-800 active:shadow-lg disabled:opacity-25 transition duration-150 ease-in-out`

export default ButtonCircle
