import React from 'react'
import ButtonText from '../../forms/buttons/ButtonText'

interface Props {
  actions: any
  isRunning: boolean
}

const TimerButtons = ({ actions, isRunning }: Props) => {
  const actionButton = isRunning ? (
    <ButtonText text="Pause" action={actions.pause}></ButtonText>
  ) : (
    <ButtonText text="Start" action={actions.start}></ButtonText>
  )

  return (
    <div>
      {actionButton}
      <ButtonText
        text="Reset"
        action={actions.reset}
        style={'ml-4'}
      ></ButtonText>
    </div>
  )
}

export default TimerButtons
