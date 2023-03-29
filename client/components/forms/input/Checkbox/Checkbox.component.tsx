interface Props {
  uuid: string
  label: string
  isChecked: boolean
  setIsChecked: (_key: string) => void
  isDisabled?: boolean
}

const Checkbox = ({ uuid, label, isChecked, setIsChecked }: Props) => {
  const elementId = `checkbox-${uuid}`

  return (
    <div className="inline-flex items-center justify-center cursor-pointer">
      <input
        className={inputStyle}
        id={elementId}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(uuid)}
      />
      <label className={labelStyle} htmlFor={elementId}>
        {label}
      </label>
    </div>
  )
}

const inputStyle = `w-4 h-4 text-gray-600 bg-gray-100 rounded border-gray-300 focus:ring-gray-500
                    focus:ring-2 accent-gray-700 `
const labelStyle = `cursor-pointer ml-2 text-sm font-medium text-gray-800`

export default Checkbox
