//'use client'

import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ReactMarkdown from 'react-markdown'

import ButtonFontIcon from '@/components/forms/buttons/ButtonFontIcon'
import ButtonTextEditor from '@/components/forms/buttons/ButtonTextEditor'
import Tabs, { TabVariant } from '@/components/tabs/Tabs'
import { useRef, useState } from 'react'
import { FaFileExport } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

import { HelperTags, HELPER_TAGS } from 'utils/constants'
import Textarea from '@/components/forms/input/Textarea'

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
  const pathname = usePathname()
  const isOverview = pathname === 'planning'
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div>
      <div className={containerStyle}>
        <label className={labelStyle} htmlFor="taskDescription">
          Description
        </label>
        <Tabs
          activeTab={activeTab}
          handleTabChange={() =>
            setActiveTab(activeTab === 'preview' ? 'edit' : 'preview')
          }
        />
      </div>
      {activeTab === 'preview' && renderPreviewField()}
      {activeTab === 'edit' && renderEditField()}
    </div>
  )

  function renderPreviewField() {
    return (
      <div className={`${previewStyles}`}>
        <h1></h1>
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
      <section className="relative">
        <div className={`${editorStyles} description-component`}>
          {/* <Highlight
            ref={textareaRef}
            handleChange={handleUpdateValue}
            id="taskDescription"
            value={value}
            customStyles="max-h-screen"
            handleCursorPositionUpdate={(pos: number) => setCursorPosition(pos)}
          /> */}
          <Textarea
            handleChange={handleUpdateValue}
            ref={textareaRef}
            id="taskDescription"
            label=""
            value={value}
            customStyles="border-none"
          />
        </div>

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
        {isOverview && (
          <div className="absolute top-4 -right-8 md:right-24 flex flex-wrap gap-2 my-2 px-2 md:px-4 opacity-80">
            <ButtonFontIcon key={'export'} action={() => exportFile()}>
              <FaFileExport height={32} />
              Export
            </ButtonFontIcon>
          </div>
        )}
      </section>
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
    textareaRef.current?.focus()
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

const labelStyle = `ml-2 text-xs scale-75 text-gray-500 duration-400 z-10 peer-focus:text-gray-400
dark:text-gray-400`

const containerStyle = `bg-gray-100 w-full text-gray-800
border border-gray-600 border-b-0 dark:text-white dark:bg-gray-800 dark:border-gray-700
rounded-t-md font-medium pb-2`

const editorStyles = `text-gray-800
  border border-gray-600 appearance-none border-t-gray-300
  focus:outline-none focus:ring-0 focus:border-gray-800
  peer disabled:opacity-25 disabled:cursor-none
  dark:text-white dark:bg-gray-800 dark:border-gray-700`

const previewStyles = `p-4 md:p-4 bg-white shadow-sm rounded-b-md border border-gray-600 border-t-gray-300
  dark:bg-gunmetal-500 dark:text-white dark:border-gray-700 max-h-[80vh] overflow-y-auto`

export default Description
