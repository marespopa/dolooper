//'use client'

import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ReactMarkdown from 'react-markdown'

import ButtonFontIcon from '@/components/forms/buttons/ButtonFontIcon'
import ButtonTextEditor from '@/components/forms/buttons/ButtonTextEditor'
import Highlight from '@/components/forms/input/Highlight'
import Tabs, { TabVariant } from '@/components/tabs/Tabs'
import { useState } from 'react'
import { FaFileExport } from 'react-icons/fa'
import { IoRefreshCircle } from 'react-icons/io5'

import { HelperTags, HELPER_TAGS } from 'utils/constants'

type Props = {
  value: string
  handleUpdateValue: (_arg: string) => void
  hasPreview?: boolean
}

const Description = ({ value, handleUpdateValue, hasPreview }: Props) => {
  const [cursorPosition, setCursorPosition] = useState(0)
  const [activeTab, setActiveTab] = useState<TabVariant>(
    hasPreview ? 'preview' : 'edit',
  )

  return (
    <div>
      <Tabs
        activeTab={activeTab}
        handleTabChange={() =>
          setActiveTab(activeTab === 'preview' ? 'edit' : 'preview')
        }
      />
      {activeTab === 'preview' && <div>{renderPreviewField()}</div>}
      {activeTab === 'edit' && <div>{renderEditField()}</div>}
    </div>
  )

  function renderPreviewField() {
    return (
      <div className={`${previewStyles}`}>
        <article className="prose dark:prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                const { children, className, ...rest } = props
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    style={nord}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {value}
          </ReactMarkdown>
        </article>
      </div>
    )
  }

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
        </div>

        <div className="flex flex-wrap gap-2 my-2 px-2 md:px-4">
          <ButtonFontIcon key={'export'} action={() => exportFile()}>
            <FaFileExport height={32} />
            Export
          </ButtonFontIcon>
          <ButtonFontIcon
            key={'clear'}
            action={() => clearContent()}
            isDisabled={value?.length === 0}
          >
            <IoRefreshCircle height={32} />
            Clear
          </ButtonFontIcon>
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

  function clearContent() {
    handleUpdateValue('')
  }
}

const editorStyles = `bg-gray-200 shadow-sm pb-1 rounded-b-md
   dark:bg-gray-600 dark:text-white dark:border-gray-600`

const previewStyles = `p-4 md:p-4 bg-white shadow-sm rounded-b-md
  dark:bg-gunmetal-500 dark:text-white dark:border-gray-600 max-h-[80vh] overflow-y-auto`

export default Description
