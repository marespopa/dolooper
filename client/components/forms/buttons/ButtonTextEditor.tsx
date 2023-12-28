import HeadingIconSVG from 'icons/editor/HeadingIconSVG'
import ListIconSVG from 'icons/editor/ListIconSVG'
import ParagraphIconSVG from 'icons/editor/ParagraphIconSVG'
import SubHeadingIconSVG from 'icons/editor/SubHeadingIconSVG'
import TitleIconSVG from 'icons/editor/TitleIconSVG'
import React from 'react'
import { FaFileExport } from 'react-icons/fa'

const buttonHeight = 24
const ButtonVariants = {
  h1: <TitleIconSVG height={buttonHeight} />,
  h2: <HeadingIconSVG height={buttonHeight} />,
  h3: <SubHeadingIconSVG height={buttonHeight} />,
  p: <ParagraphIconSVG height={buttonHeight} />,
  li: <ListIconSVG height={buttonHeight} />,
  export: <FaFileExport height={buttonHeight} />,
}

type VariantValues = keyof typeof ButtonVariants

interface Props {
  variant: VariantValues
  action: () => void
  label: string // Describe what the button is doing
  isDisabled?: boolean
  style?: string
}

const ButtonTextEditor = ({
  variant,
  label,
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
      title={label}
      disabled={isDisabled}
    >
      {ButtonVariants[variant]}{' '}
    </button>
  )
}

const buttonStyles = `inline-flex align-middle px-4 py-1 bg-gray-600 text-white font-medium text-xs
                        leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg
                        focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800
                        active:shadow-lg transition duration-150 ease-in-out items-center whitespace-nowrap
                        dark:bg-gray-500 dark:hover:bg-amber-200 dark:focus:bg-amber-200
                        dark:hover:text-gray-700 dark:focus:text-gray-700 dark:text-gray-300`

export default ButtonTextEditor
