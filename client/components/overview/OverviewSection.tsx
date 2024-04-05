import React, { useState } from 'react'
import { pagePadding } from '../common/common'
import ConfettiExplosion from 'react-confetti-explosion'

import { Provider, createStore, useAtom } from 'jotai'

import ButtonLink from '../forms/buttons/ButtonLink'
import Alert from '../banners/Alert'
import Seo from '../Seo'
import SnippetsSection from './SnippetsSection/SnippetsSection'
import Timer from '../timer'
import MarkdownPreview from './MarkdownPreview'
import TaskDetails from './TaskDetails'
import SubtasksSection from './SubtasksSection'
import Greeting from '../common/Greeting'
import TemplateSection from './TemplateSection'
import NotesSection from './NotesSection'
import TipsSection from './TipsSection'
import { atom_description } from 'jotai/atoms'
import {
  DEFAULT_TEMPLATES,
  TEMPLATES_WITH_DATES,
} from './TemplateSection/templates'
import { TemplateVariant } from './TemplateSection/TemplateSection.component'
import { getCurrentDate } from 'utils/functions'
import ButtonCircle from '../forms/buttons/ButtonCircle'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type Props = {
  handleReset: () => void
}

export const OVERVIEW_PAGE_TITLE = 'Dolooper - Dashboard'

const OverviewSection = ({ handleReset }: Props) => {
  const CONFETTI_TIMER = 5000
  const pageTitle = OVERVIEW_PAGE_TITLE
  const myStore = createStore()
  const [showConfetti, setShowConfetti] = useState(false)
  const [isPreview, setIsPreview] = useState(false)

  const [, setDescription] = useAtom(atom_description)

  function loadTemplate(variant: TemplateVariant) {
    let description = DEFAULT_TEMPLATES[variant].description

    if (TEMPLATES_WITH_DATES.includes(variant)) {
      description = description.replace('dd.mm.yyyy', getCurrentDate())
    }
    setDescription(description)
  }

  return (
    <Provider store={myStore}>
      <Seo title={pageTitle} />
      <section className={`${pagePadding}`}>
        <Greeting />
        <div className={`${showConfetti && 'opacity-30'}`}>
          {renderTaskDashboard()}
        </div>
      </section>
    </Provider>
  )

  function renderTaskDashboard() {
    return (
      <div className="my-4 md:md-0">
        <div>
          <div className="w-full">
            <h2 className="text-3xl font-bold mt-3 mb-3">
              Ready for a focused session?
            </h2>
            <>
              <p className="my-5 mx-auto text-xl">Define your task.</p>
              <p className="text-xs text-gray-500 -mt-4 mb-4 dark:text-gray-400">
                <ButtonLink action={handleTutorialStart()}>
                  Need help getting started?
                </ButtonLink>
              </p>
            </>
          </div>
          <div className="w-full flex gap-4 items-center justify-between">
            <ButtonCircle
              action={() => setIsPreview(!isPreview)}
              title={isPreview ? 'Edit' : 'Preview'}
            >
              {isPreview ? <FaEyeSlash /> : <FaEye />}
            </ButtonCircle>
            <TemplateSection
              handleTemplateChange={(variant) => {
                loadTemplate(variant)
                setIsPreview(false)
              }}
            />
          </div>
          {!isPreview && <TaskDetails />}
          {isPreview && <MarkdownPreview />}
        </div>
        {renderInfoMessages()}
        <Timer />
        <div className="grid md:grid-cols-2	md:gap-8">
          <SubtasksSection />
          <NotesSection />
        </div>
        <div className="grid md:grid-cols-2	md:gap-8">
          <SnippetsSection />
          <TipsSection />
        </div>
      </div>
    )
  }

  function handleTutorialStart(): () => void {
    return () => {
      setIsPreview(true)
      loadTemplate('tutorial')
    }
  }

  function renderInfoMessages() {
    const confettiConfigProps = {
      force: 1.2,
      duration: CONFETTI_TIMER,
      particleCount: 250,
      width: 1600,
    }

    return (
      <section className="mt-4">
        <Alert style="info">
          {showConfetti
            ? 'Congratulations! Starting up a new one...'
            : `Completed this task? `}
          {!showConfetti && (
            <ButtonLink action={() => markTaskAsCompleted()}>
              Start a new one
            </ButtonLink>
          )}
          {showConfetti && <ConfettiExplosion {...confettiConfigProps} />}
        </Alert>
      </section>
    )
  }

  function markTaskAsCompleted() {
    setShowConfetti(true)
    setTimeout(() => {
      handleReset()
      setIsPreview(false)
      setShowConfetti(false)
    }, CONFETTI_TIMER - 1000)
  }
}

export default OverviewSection
