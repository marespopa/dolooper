'use client'

import { useLayoutEffect, useRef, useState } from 'react'

import Textarea from '@/components/forms/input/Textarea'
import { useAtom } from 'jotai'
import { atom_description, atom_subTasks } from 'jotai/atoms'
import ButtonLink from '@/components/forms/buttons/ButtonLink'
import { nanoid } from 'nanoid'
import { Task } from 'types/types'
import { FaInfo } from 'react-icons/fa'

interface Props {
  isFocused: boolean;
}

const DescriptionField = ({ isFocused }: Props) => {
  const [, setCursorPosition] = useState(0)
  const [tasks, setTasks] = useAtom(atom_subTasks)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [selectedText, setSelectedText] = useState('')
  const [isListSelected, setIsListSelected] = useState(false)

  useLayoutEffect(() => {
    document.addEventListener('selectionchange', handleTextareaSelection)

    return () => {
      document.removeEventListener('selectionchange', handleTextareaSelection)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleTextareaSelection() {
    if (!textareaRef?.current) {
      return
    }

    const selectionStart = textareaRef.current.selectionStart
    const selectionEnd = textareaRef.current.selectionEnd
    const selectedText = textareaRef.current.value.substring(
      selectionStart,
      selectionEnd,
    )
    setSelectedText(selectedText)
    setIsListSelected(isList(selectedText))
  }

  function isList(text: string) {
    const listRegex = /^(\s*(\d.|-|\*|\+)\s+.*)$/gm

    return listRegex.test(text)
  }

  const [description, setDescription] = useAtom(atom_description)

  function handleUpdateField(value: string) {
    setDescription(value)
  }

  return (
    <section className="relative overflow-y-auto mb-2">
      <Textarea
        handleChange={handleUpdateField}
        ref={textareaRef}
        id="taskDetails"
        label="Start describing your task here..."
        value={description}
        helpText={
          <>
            * Use{' '}
            <a
              href="https://www.markdownguide.org/getting-started/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="underline"
            >
              {' '}
              Markdown
            </a>{' '}
            to add headings, lists, and more.
          </>
        }
        handleCursorPositionUpdate={(pos: number) => setCursorPosition(pos)}
      />
      {!isFocused && isListSelected && (
        <div className="mt-2 text-xs text-blue-700 bg-white dark:bg-gray-600 dark:text-blue-300 px-2 py-4 items-center flex gap-2">
          <FaInfo />
          You selected a list.{' '}
          <ButtonLink
            showAsLink={true}
            action={convertSelectionToSubtasks()}
            style="text-xs"
          >
            Click here to convert it to subtasks.
          </ButtonLink>
        </div>
      )}
    </section>
  )

  function convertSelectionToSubtasks(): () => void {
    return () => {
      const listMarkerRegex = /\d\.|- |\* |\+ /
      const lines = selectedText.split(listMarkerRegex)

      const subTasks = lines.reduce((listItems: Task[], line) => {
        const parsedLine = line.trim().replace('\n', '')

        if (parsedLine.length > 0) {
          listItems.push({
            key: nanoid(),
            value: parsedLine,
            isDone: false,
          })
        }

        return listItems
      }, [])

      const updatedTasks = [...tasks, ...subTasks]
      setTasks(updatedTasks)
      setSelectedText('')
      setIsListSelected(false)
    }
  }
}

export default DescriptionField
