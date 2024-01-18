import { ForwardedRef, forwardRef } from 'react'

interface Props {
  uuid: string
  label: string
  isChecked: boolean
  setIsChecked: (_key: string) => void
  isDisabled?: boolean
}

const Checkbox = (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
  const { uuid, label, isChecked, setIsChecked } = props
  const elementId = `checkbox-${uuid}`
  const labelValue = isChecked ? (
    <span className={isChecked ? 'line-through' : ''}>{label}</span>
  ) : (
    <span>{label}</span>
  )

  return (
    <div className="inline-flex items-center justify-center cursor-pointer">
      <input
        ref={ref}
        className={inputStyle}
        id={elementId}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(uuid)}
      />
      <label
        className={`${labelStyle} ${isChecked && 'line-through'}`}
        htmlFor={elementId}
      >
        {labelValue}
      </label>
    </div>
  )
}

const inputStyle = `w-4 h-4 bg-gray-100 border-gray-300 focus:ring-gray-500
                    focus:ring-2 accent-amber-200 dark:bg-gray-700`
const labelStyle = `cursor-pointer ml-4 text-md font-medium`

export default forwardRef(Checkbox)
