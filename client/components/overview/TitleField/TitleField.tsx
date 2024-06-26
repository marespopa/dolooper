import React from 'react'
import { useAtom } from 'jotai';
import { atom_filename } from 'jotai/atoms'
import Input from '@/components/forms/input/Input'

const TitleField = () => {
    const [filename, setFilename] = useAtom(atom_filename);

    function handleUpdateFilename(value: string) {
        setFilename(value)
      }

  return (
    <section className='my-4'>
        <Input handleChange={handleUpdateFilename} id="filename" label="File Name" value={filename} helpText={'The name of the saved .md file'}/>
    </section>
  )
}

export default TitleField