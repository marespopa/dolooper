import useAutoResizeTextArea from 'hooks/use-autoresize'
import React, { FormEvent, forwardRef } from 'react'

interface Props {
  handleChange: (_arg: string) => void
  id: string
  label: string
  value: string
  helpText?: string
  customStyles?: string
  isDisabled?: boolean
  handleCursorPositionUpdate: (_position: number) => void
}
const DEFAULT_TEXTAREA_ROWS = 4

const Textarea = forwardRef(function Textarea(props: Props, ref: any) {
  const {
    handleChange,
    id,
    label,
    value,
    customStyles,
    isDisabled = false,
  } = props
  const commonProps = {
    id,
    disabled: isDisabled,
    placeholder: ' ',
    value,
  }

  useAutoResizeTextArea(ref, commonProps.value)

  return (
    <div className="relative sm:z-0">
      <textarea
        ref={ref}
        {...commonProps}
        className={`${inputStyle} ${customStyles}`}
        onChange={(e: FormEvent<HTMLTextAreaElement>) => {
          handleChange(e.currentTarget.value)
        }}
        autoComplete="off"
        rows={DEFAULT_TEXTAREA_ROWS}
        onBlur={(e) =>
          props.handleCursorPositionUpdate(e.target.selectionStart)
        }
      />
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
      {props.helpText && (
        <span className="text-xs sm:ml-2 -mt-2 text-gray-700 dark:text-gray-300">
          {props.helpText}
        </span>
      )}
    </div>
  )
})

const inputStyle = `bg-gray-100 block px-2.5 pb-2.5 pt-6 w-full text-sm text-gray-800
                    border border-gray-600 appearance-none
                    focus:outline-none focus:ring-0 focus:border-gray-800
                    peer disabled:opacity-25 disabled:cursor-none resize-none
                    transition-height duration-400 ease-in-out
                    dark:bg-gray-800 dark:text-white dark:border-gray-700`

const labelStyles = `bg-gray-100 dark:bg-gray-800 absolute text-sm text-gray-500 duration-400 transform
                     -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-400
                     peer-placeholder-shown:scale-100 cursor: text; peer-placeholder-shown:translate-y-0
                     peer-focus:scale-75 peer-focus:-translate-y-4 dark:text-gray-400`

export default Textarea
