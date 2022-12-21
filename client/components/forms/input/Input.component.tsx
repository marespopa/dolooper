import React from 'react'

type InputType = 'text' | 'textarea'
interface Props {
  action: (arg: string) => void
  id: string
  label: string
  value: string
  type: InputType
  customStyles?: string
  isDisabled?: boolean
}
const DEFAULT_TEXTAREA_ROWS = 10

const Input = ({
  action,
  id,
  label,
  value,
  type,
  isDisabled = false,
}: Props) => {
  const commonProps = {
    id,
    disabled: isDisabled,
    placeholder: ' ',
    value,
  }

  const getInputByType = (type: InputType) => {
    if (type === 'textarea') {
      return (
        <textarea
          {...commonProps}
          className={textareaStyle}
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
            action(e.currentTarget.value)
          }}
          rows={DEFAULT_TEXTAREA_ROWS}
        />
      )
    }

    return (
      <input
        {...commonProps}
        className={inputStyle}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          action(e.currentTarget.value)
        }}
      />
    )
  }

  return (
    <div className="relative z-0 ">
      {getInputByType(type)}
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
    </div>
  )
}

const textareaStyle = `block rounded-t-lg px-2.5 pb-2.5 pt-6 w-full text-sm text-gray-600 bg-white
                    border-0 border-b-2 border-gray-300 appearance-none
                    focus:outline-none focus:ring-0 focus:border-blue-600 peer disabled:opacity-25 disabled:cursor-none`

const inputStyle = `${textareaStyle}`

const labelStyles = `absolute text-sm text-gray-500 duration-300 transform
                     -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-400
                     peer-placeholder-shown:scale-100 cursor: text; peer-placeholder-shown:translate-y-0
                     peer-focus:scale-75 peer-focus:-translate-y-4`
export default Input
