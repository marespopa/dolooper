import React from 'react'
import DeleteSVG from '../../../icons/DeleteSVG'
import LogSVG from '../../../icons/LogSVG'
import PenSVG from '../../../icons/PenSVG'
import ThreeDotsSVG from '../../../icons/ThreeDotsSVG'

interface Props {
  variant: 'edit' | 'delete' | 'more' | 'log'
  action: () => void
  isDisabled?: boolean
  style?: string
}

const typeToSvg = {
  edit: <PenSVG />,
  more: <ThreeDotsSVG />,
  delete: <DeleteSVG />,
  log: <LogSVG />,
}

const ButtonIcon = ({ variant, action, isDisabled, style = '' }: Props) => {
  return (
    <button
      className={`${buttonStyles} ${style}`}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={action}
      role="button"
      disabled={isDisabled}
    >
      {typeToSvg[variant]}
    </button>
  )
}

const buttonStyles = `ml-2 inline-block px-1 py-1.5 bg-gray-600 text-white font-medium text-xs
                        leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg
                        focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800
                        active:shadow-lg transition duration-150 ease-in-out items-center whitespace-nowrap
                        dark:bg-gray-200 dark:text-gray-700`

export default ButtonIcon
