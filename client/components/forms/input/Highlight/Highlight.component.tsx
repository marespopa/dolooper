'use client'

import useDarkTheme from 'hooks/use-darktheme'
import { useScrollLock } from 'hooks/use-scroll-lock'
import React, { FormEvent, forwardRef, useLayoutEffect, useRef } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  atomOneLight,
  nord,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import ButtonText from '../../buttons/ButtonText'

interface Props {
  handleChange: (_arg: string) => void
  id: string
  value: string
  handleCursorPositionUpdate: (_position: number) => void
  customStyles?: string
  isDisabled?: boolean
}
const DEFAULT_TEXTAREA_ROWS = 4
const TEXTAREA_HEIGHT = 380

const Highlight = forwardRef(function Highlight(
  props: Props,
  textareaRef: any,
) {
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
  const containerRef = useRef<HTMLDivElement>(null)
  const { lock, unlock, isLocked } = useScrollLock({
    autoLock: false,
    lockTarget: '#scrollable',
  })

  useLayoutEffect(() => {
    if (textareaRef.current?.clientHeight && highlightRef.current) {
      highlightRef.current.style.height = `${TEXTAREA_HEIGHT}px`
    }
  }, [textareaRef.current?.clientHeight, textareaRef])

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
    <div
      className={`relative sm:z-0 h-[${TEXTAREA_HEIGHT}px]`}
      ref={containerRef}
    >
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
              padding: '1rem 0.5rem',
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
        onFocus={onTextareaFocus()}
        onScroll={handleScroll}
        autoComplete="off"
        rows={DEFAULT_TEXTAREA_ROWS}
        onBlur={(e) => {
          handleCursorPositionUpdate(e.target.selectionStart)
          unlock()
        }}
      />

      {isLocked && (
        <ButtonText
          style="absolute bottom-4 right-4 border-0 text-lg"
          text={<span title="Unlock Scroll">🔓</span>}
          action={() => {
            unlock()
            document.body.focus()
          }}
        ></ButtonText>
      )}
    </div>
  )

  function onTextareaFocus():
    | React.FocusEventHandler<HTMLTextAreaElement>
    | undefined {
    return () => {
      if (!containerRef?.current) {
        return
      }

      window.scrollTo({
        behavior: 'smooth',
        top:
          containerRef?.current?.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          150,
      })
      lock()
    }
  }
})

const inputStyle = `absolute top-0 left-0 w-full h-[${TEXTAREA_HEIGHT}px] overflow-y-scroll text-transparent bg-transparent caret-slate-500
                    font-mono px-2 py-4 outline-none resize-none`

export default Highlight
