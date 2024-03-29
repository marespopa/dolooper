import dynamic from 'next/dynamic'
import React from 'react'
import Container from '../container/Container.component'

import {
  atom_description,
  atom_snippets,
  atom_subTasks,
  atom_title,
} from 'jotai/atoms'
import { useAtom } from 'jotai'
import { RESET } from 'jotai/utils'
import Loading from '../loading/Loading'
import StorageService from 'services/storageService'
import { useRouter } from 'next/router'

const OverviewSection = dynamic(() => import('./OverviewSection'), {
  loading: () => <Loading />,
})

const OverviewPage = () => {
  const [, setTasks] = useAtom(atom_subTasks)
  const [, setTitle] = useAtom(atom_title)
  const [, setDescription] = useAtom(atom_description)
  const [, setSnippets] = useAtom(atom_snippets)
  const router = useRouter()

  const sectionProps = {
    handleReset,
  }

  return (
    <Container>
      <OverviewSection {...sectionProps} />
    </Container>
  )

  function handleReset() {
    StorageService.removeTime('start')
    setTasks(RESET)
    setTitle(RESET)
    setDescription(RESET)
    setSnippets(RESET)
    router.push('/overview#greeting')
  }
}

export default OverviewPage
