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
        label="Task Details"
        value={description}
        handleCursorPositionUpdate={(pos: number) => setCursorPosition(pos)}
      />
    </section>
  )
}

export default DescriptionField
