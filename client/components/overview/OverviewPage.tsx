import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import React from 'react'
import Container from '../container/Container.component'

import { atom_description, atom_snippets, atom_subTasks } from 'jotai/atoms'
import { useAtom } from 'jotai'
import { RESET } from 'jotai/utils'
import Loading from '../loading/Loading'

const OverviewSection = dynamic(() => import('./OverviewSection'), {
  loading: () => <Loading />,
})

const OverviewPage = () => {
  const router = useRouter()
  const [, setTasks] = useAtom(atom_subTasks)
  const [, setDescription] = useAtom(atom_description)
  const [, setSnippets] = useAtom(atom_snippets)

  const sectionProps = {
    handleReset,
  }

  return (
    <Container>
      <OverviewSection {...sectionProps} />
    </Container>
  )

  function handleReset() {
    router.push('/planning')
    setTasks(RESET)
    setDescription(RESET)
    setSnippets(RESET)
  }
}

export default OverviewPage
