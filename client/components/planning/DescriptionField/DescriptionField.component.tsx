//'use client'

import ButtonTextEditor from '@/components/forms/buttons/ButtonTextEditor'
import { useRef, useState } from 'react'

import { HelperTags, HELPER_TAGS } from 'utils/constants'
import Textarea from '@/components/forms/input/Textarea'
import { useAtom } from 'jotai'
import { atom_description } from 'jotai/atoms'

const DescriptionField = () => {
  const [cursorPosition, setCursorPosition] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [description, setDescription] = useAtom(atom_description)

  function handleUpdateField(value: string) {
    setDescription(value)
  }

  return (
    <section className="relative">
      <Textarea
        handleChange={handleUpdateField}
        ref={textareaRef}
        id="taskDetails"
        label="Task Details"
        value={description}
        handleCursorPositionUpdate={(pos: number) => setCursorPosition(pos)}
        helpText="A brief overview of what needs to be accomplished, in which you can
        use markdown for detailed formatting."
      />
      {renderEditorHelper()}
    </section>
  )

  function renderEditorHelper() {
    return (
      <div className="flex flex-wrap gap-2 my-4">
        {HELPER_TAGS.map((tag) => {
          return (
            <ButtonTextEditor
              label={tag.description}
              key={tag.name}
              variant={tag.name}
              action={() => handleEditorAction(description, tag.name)}
            />
          )
        })}
      </div>
    )
  }

  function handleEditorAction(value: string, option: HelperTags) {
    const selectedHelperTag = HELPER_TAGS.find((item) => item.name === option)

    if (!selectedHelperTag) {
      return
    }

    let textBeforeCursorPosition = value.substring(0, cursorPosition)
    let textAfterCursorPosition = value.substring(cursorPosition, value.length)
    const newContent = `${textBeforeCursorPosition}${selectedHelperTag.value}${textAfterCursorPosition}`

    handleUpdateField(newContent)
    textareaRef.current?.focus()
  }
}

export default DescriptionField
