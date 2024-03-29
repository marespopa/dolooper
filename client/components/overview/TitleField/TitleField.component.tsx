import Input from '@/components/forms/input/Input'
import { useAtom } from 'jotai'
import { atom_title } from 'jotai/atoms'
import React from 'react'

const TitleField = () => {
  const [title, setTitle] = useAtom(atom_title)

  function updateTitle(title: string) {
    setTitle(title)
  }

  return (
    <Input
      id={`taskTitle`}
      value={title}
      handleChange={updateTitle}
      label="Title"
      helpText="A concise name that captures the essence of the task."
    />
  )
}

export default TitleField
