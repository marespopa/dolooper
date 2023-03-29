import React from 'react'

interface Props {
  action: (_arg: string) => void
  id: string
  label: string
  value: string
  customStyles?: string
  isDisabled?: boolean
}

const Input = ({ action, id, label, value, isDisabled = false }: Props) => {
  const commonProps = {
    id,
    disabled: isDisabled,
    placeholder: ' ',
    value,
  }

  return (
    <div className="relative z-0 ">
      <input
        {...commonProps}
        className={inputStyle}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          action(e.currentTarget.value)
        }}
      />
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
    </div>
  )
}

const inputStyle = `bg-gray-100 block px-2.5 pb-2.5 pt-6 w-full text-sm text-gray-800
                    border border-gray-600 appearance-none
                    focus:outline-none focus:ring-0 focus:border-gray-800
                    peer disabled:opacity-25 disabled:cursor-none`

const labelStyles = `absolute text-sm text-gray-500 duration-300 transform
                     -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-400
                     peer-placeholder-shown:scale-100 cursor: text; peer-placeholder-shown:translate-y-0
                     peer-focus:scale-75 peer-focus:-translate-y-4`
export default Input
