'use client'

import useDarkTheme from 'hooks/use-darktheme'
import React, { FormEvent, useLayoutEffect, useRef } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  atomOneLight,
  nord,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface Props {
  handleChange: (_arg: string) => void
  id: string
  value: string
  handleCursorPositionUpdate: (_position: number) => void
  customStyles?: string
  isDisabled?: boolean
}
const DEFAULT_TEXTAREA_ROWS = 4

const Highlight = (props: Props) => {
  const {
    handleChange,
    handleCursorPositionUpdate,
    id,
    value,
    customStyles,
    isDisabled = false,
  } = props
  const { isDarkTheme } = useDarkTheme()
  const hightlighterTheme = isDarkTheme ? nord : atomOneLight

  const commonProps = {
    id,
    disabled: isDisabled,
    placeholder: ' ',
    value,
  }

  const highlightRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useLayoutEffect(() => {
    if (textareaRef.current?.clientHeight && highlightRef.current) {
      const textareaHeight = textareaRef.current.scrollHeight || 100
      const updatedHeight = textareaHeight > 360 ? 360 : textareaHeight

      highlightRef.current.style.height = `${updatedHeight}px`
    }
  }, [textareaRef.current?.clientHeight])

  const handleScroll = (e: any) => {
    const { scrollTop } = e.target

    if (textareaRef.current && highlightRef.current) {
      const code = highlightRef.current.querySelector('code')

      if (code) {
        code.scrollTop = scrollTop
      }
    }
  }

  return (
    <div className="relative sm:z-0 h-[360px]">
      <div className="absolute top-0 left-0 w-full" ref={highlightRef}>
        <SyntaxHighlighter
          language="markdown"
          style={hightlighterTheme}
          customStyle={{
            overflowY: 'hidden',
            height: '100%',
            padding: '0 16px 0 0',
          }}
          wrapLines={true}
          wrapLongLines={true}
          codeTagProps={{
            style: {
              height: '100%',
              display: 'block',
              overflowY: 'hidden',
              padding: '16px 8px',
            },
          }}
        >
          {value}
        </SyntaxHighlighter>
      </div>

      <textarea
        ref={textareaRef}
        {...commonProps}
        className={`${inputStyle} ${customStyles}`}
        onChange={(e: FormEvent<HTMLTextAreaElement>) => {
          handleChange(e.currentTarget.value)
        }}
        onScroll={handleScroll}
        autoComplete="off"
        rows={DEFAULT_TEXTAREA_ROWS}
        onBlur={(e) => handleCursorPositionUpdate(e.target.selectionStart)}
      />
    </div>
  )
}

const inputStyle = `absolute top-0 left-0 w-full h-[360px] overflow-y-scroll text-transparent bg-transparent caret-slate-500
                    font-mono px-2 py-4 outline-none resize-none`

export default Highlight
