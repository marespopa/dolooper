import ButtonTextEditor from '@/components/forms/buttons/ButtonTextEditor'
import { HelperTags, HELPER_TAGS } from 'utils/constants'

interface Props {
  textareaRef: any
  handleUpdateField: (_arg: string) => void
  description: string
  cursorPosition: number
}

export default function EditorHelper({
  textareaRef,
  handleUpdateField,
  description,
  cursorPosition,
}: Props) {
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
