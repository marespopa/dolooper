//'use client'

import { useRef, useState } from 'react'

import Textarea from '@/components/forms/input/Textarea'
import { useAtom } from 'jotai'
import { atom_description } from 'jotai/atoms'

const DescriptionField = () => {
  const [, setCursorPosition] = useState(0)
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
    </section>
  )
}

export default DescriptionField
