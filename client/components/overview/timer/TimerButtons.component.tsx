import React from 'react'
import ButtonText from '../../forms/buttons/ButtonText'

interface Props {
  actions: any
  isRunning: boolean
}

const TimerButtons = ({ actions, isRunning }: Props) => {
  const actionButton = isRunning ? (
    <ButtonText text="Take a break" action={actions.pause}></ButtonText>
  ) : (
    <ButtonText text="Start" action={actions.start}></ButtonText>
  )

  return <div>{actionButton}</div>
}

export default TimerButtons
