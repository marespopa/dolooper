import ButtonTextEditor from '@/components/forms/buttons/ButtonTextEditor'
import Textarea from '@/components/forms/input/Textarea'
import Tabs, { TabVariant } from '@/components/tabs/Tabs'
import { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { HelperTags, HELPER_TAGS } from 'utils/constants'

type Props = {
  value: string
  handleUpdateValue: (_arg: string) => void
}

const Issue = (props: Props) => {
  const { value, handleUpdateValue } = props
  const [isEdit, setIsEdit] = useState(true)

  return (
    <div>
      <Tabs
        activeTab={isEdit ? 'edit' : 'preview'}
        handleTabChange={onTabChange}
      />
      {isEdit && renderEditField()}
      {!isEdit && renderDisplayField()}
    </div>
  )

  function onTabChange(tab: TabVariant) {
    setIsEdit(tab === 'edit')
  }

  function renderDisplayField() {
    const hasText = value && value.length > 0

    return (
      <div className={previewStyles} onDoubleClick={() => setIsEdit(!isEdit)}>
        {!hasText && <p>Describe the task first...</p>}
        {hasText && <ReactMarkdown>{value}</ReactMarkdown>}
      </div>
    )
  }

  function renderEditField() {
    return (
      <div className={`${editorStyles}`}>
        <Textarea
          handleChange={handleUpdateValue}
          id={'issue'}
          label={'Description'}
          value={value}
          customStyles="max-h-screen"
        />
        <div className="flex flex-wrap gap-2 mt-4">
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
        </div>
      </div>
    )
  }

  function handleEditorAction(option: HelperTags) {
    const selectedHelperTag = HELPER_TAGS.find((item) => item.name === option)

    if (!selectedHelperTag) {
      return
    }

    let valueToBeAdded = selectedHelperTag.value as string

    if (value.length > 0) {
      valueToBeAdded = '\n' + valueToBeAdded
    }
    handleUpdateValue(value + valueToBeAdded)
  }
}

const previewStyles = `px-4 py-2 prose prose-neutral max-w-none prose-h1:text-center w-full
   prose-li:marker:text-amber-500
   dark:prose-invert dark:prose-li:marker:text-amber-200 bg-white shadow-sm px-2 md:px-4 py-3 rounded-b-md
   dark:bg-gray-600 dark:text-white dark:border-gray-600 break-words max-h-screen overflow-y-auto`

const editorStyles = `bg-white shadow-sm px-2 md:px-4 py-3 rounded-b-md
   dark:bg-gray-600 dark:text-white dark:border-gray-600`

export default Issue
