import ButtonSecondary from '@/components/forms/buttons/ButtonSecondary'
import { boxStyles } from '@/components/overview/OverviewSection'
import { useAtom } from 'jotai'
import { Snippet, atom_snippets } from 'jotai/atoms'
import SnippetItem from './SnippetItem'
import { FaPlusCircle } from 'react-icons/fa'

import React, { useState } from 'react'
import { nanoid } from 'nanoid'

type Props = {}

export default function SnippetsSection({}: Props) {
  const [showSection, setShowSection] = useState(true)
  const [list, setList] = useAtom(atom_snippets)

  return (
    <section className={boxStyles}>
      <ButtonSecondary action={() => setShowSection(!showSection)}>
        {`${showSection ? 'Hide' : 'Show'} Snippets`}
      </ButtonSecondary>

      {showSection && renderList()}
    </section>
  )

  function renderList() {
    return (
      <div className="py-4">
        {list.length === 0 && 'No snippets added yet.'}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {list.map((el) => (
            <SnippetItem
              key={el.id}
              item={el}
              actions={{
                update: handleSnippetChange,
                delete: handleSnippetDelete,
              }}
            />
          ))}
        </div>
        <div className="mt-4">
          <ButtonSecondary action={() => handleAddSnippet()}>
            <>
              <FaPlusCircle /> Add
            </>
          </ButtonSecondary>
        </div>
      </div>
    )
  }

  function handleSnippetChange(newData: Snippet) {
    setList((prevData) =>
      prevData.map((el) => (el.id === newData.id ? newData : el)),
    )
  }

  function handleSnippetDelete(id: string) {
    setList((prev) => {
      return prev.filter((el) => el?.id !== id)
    })
  }

  function handleAddSnippet() {
    setList([...list, { id: nanoid(), value: '' }])
  }
}
