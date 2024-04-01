import { useAtom } from 'jotai'
import { atom_notes } from 'jotai/atoms'

import React, { useRef, useState } from 'react'
import SectionHeading from '../common/SectionHeading.component'
import Textarea from '@/components/forms/input/Textarea'

type Props = {}

export default function NotesSection({}: Props) {
  const [notes, setNotes] = useAtom(atom_notes)
  const [isExpanded, setIsExpanded] = useState(true)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <section className="mt-8">
      <SectionHeading
        title="Notes"
        description={
          'Use this space for brainstorming, saving research links, or noting questions that pop up during your session.'
        }
        subHeading={
          '* Jot down distracting but important thoughts to revisit later.'
        }
        isExpanded={isExpanded}
        handleToggle={() => setIsExpanded(!isExpanded)}
      />
      {isExpanded && renderTextarea()}
    </section>
  )

  function renderTextarea() {
    return (
      <Textarea
        handleChange={handleUpdateField}
        ref={textareaRef}
        id="taskNotes"
        label="Write your notes"
        value={notes}
      />
    )
  }

  function handleUpdateField(value: string) {
    setNotes(value)
  }
}
