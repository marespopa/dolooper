import ButtonTextEditor from '@/components/forms/buttons/ButtonTextEditor'
import Textarea from '@/components/forms/input/Textarea'
import React, { useRef } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { HelperTags, helperTags } from 'utils/constants'

type Props = {
  isEdit: boolean
  value: string
  handleUpdateValue: (_arg: string) => void
}

const Issue = (props: Props) => {
  const { isEdit, value, handleUpdateValue } = props
  const ref = useRef(null)

  const displayField = (
    <div className={fieldStyle}>
      <ReactMarkdown>{value}</ReactMarkdown>
    </div>
  )

  return <div>{isEdit ? renderEditField() : displayField}</div>

  function renderEditField() {
    return (
      <>
        <Textarea
          ref={ref}
          handleChange={handleUpdateValue}
          id={'issue'}
          label={'Description'}
          value={value}
        />
        <div className="flex flex-wrap gap-2 mt-4">
          {helperTags.map((tag) => {
            return (
              <ButtonTextEditor
                key={tag.name}
                variant={tag.name}
                label={tag.label}
                action={() => addElement(tag.name)}
              />
            )
          })}
        </div>
      </>
    )
  }

  function addElement(option: HelperTags) {
    const selectedHelperTag = helperTags.find((item) => item.name === option)

    if (!selectedHelperTag) {
      return
    }

    let valueToBeAdded = selectedHelperTag.value as string

    if (value.length > 0) {
      valueToBeAdded = '\n' + valueToBeAdded
    }
    handleUpdateValue(value + valueToBeAdded)

    ref.current.focus()
  }
}

const fieldStyle = `prose prose-neutral prose-h1:mb-4 prose-h2:my-2 
   prose-p:px-0 max-w-fit prose-li:marker:text-amber-500
   dark:prose-invert dark:prose-li:marker:text-amber-200`

export default Issue
