'use client'

import ButtonTextEditor from '@/components/forms/buttons/ButtonTextEditor'
import Highlight from '@/components/forms/input/Highlight'
import { useState } from 'react'
import { HelperTags, HELPER_TAGS } from 'utils/constants'

type Props = {
  value: string
  handleUpdateValue: (_arg: string) => void
}

const Description = (props: Props) => {
  const { value, handleUpdateValue } = props
  const [cursorPosition, setCursorPosition] = useState(0)

  return <div>{renderEditField()}</div>

  function renderEditField() {
    return (
      <div className={`${editorStyles}`}>
        <Highlight
          handleChange={handleUpdateValue}
          id={'issue'}
          value={value}
          customStyles="max-h-screen"
          handleCursorPositionUpdate={(pos: number) => setCursorPosition(pos)}
        />
        <div className="flex flex-wrap gap-2 my-4 px-2 md:px-4">
          {HELPER_TAGS.map((tag) => {
            return (
              <ButtonTextEditor
                label={tag.description}
                key={tag.name}
                variant={tag.name}
                action={() => handleEditorAction(tag.name)}
              />
            )
          })}

          <ButtonTextEditor
            style="ml-auto"
            label={'Export'}
            key={'export'}
            variant={'export'}
            action={() => exportFile()}
          />
        </div>
      </div>
    )
  }

  function handleEditorAction(option: HelperTags) {
    const selectedHelperTag = HELPER_TAGS.find((item) => item.name === option)

    if (!selectedHelperTag) {
      return
    }

    let textBeforeCursorPosition = value.substring(0, cursorPosition)
    let textAfterCursorPosition = value.substring(cursorPosition, value.length)
    const newContent = `${textBeforeCursorPosition}${selectedHelperTag.value}${textAfterCursorPosition}`

    handleUpdateValue(newContent)
  }

  function exportFile(): void {
    const fileData = value
    const blob = new Blob([fileData], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = 'task.md'
    link.href = url
    link.click()
  }
}

const editorStyles = `bg-gray-200 shadow-sm pb-1 rounded-b-md
   dark:bg-gray-600 dark:text-white dark:border-gray-600`

export default Description
