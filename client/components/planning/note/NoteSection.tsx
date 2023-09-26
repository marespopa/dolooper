import Textarea from '@/components/forms/input/Textarea'
import React, { useEffect, useState } from 'react'
import StorageService from 'services/storageService'

const NoteSection = () => {
  const [note, setNote] = useState(``)

  useEffect(() => {
    StorageService.getNote().then((result) => {
      if (result) {
        setNote(result)
      }
    })
  }, [])

  function updateNote(value: string) {
    setNote(value)
    StorageService.setNote(value)
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
