import React from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: React.ReactNode
}

const Portal = ({ children }: Props) => {
  return <>{createPortal(children, document.body)}</>
}

export default Portal
