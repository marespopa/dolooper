import Textarea from '@/components/forms/input/Textarea'
import React, { useEffect, useState } from 'react'
import service from 'services/service'

const NoteSection = () => {
  const [note, setNote] = useState(``)

  useEffect(() => {
    service.getNote().then((result) => {
      if (result) {
        setNote(result)
      }
    })
  }, [])

  function updateNote(value: string) {
    setNote(value)
    service.setNote(value)
  }

  return (
    <Textarea
      handleChange={updateNote}
      id={'issue'}
      label={'Notepad'}
      value={note}
      customStyles="max-h-screen mt-2"
    />
  )
}

export default NoteSection
