import React from 'react'

type Props = {
  text: string
}

const TextDashboardEntry = ({ text }: Props) => {
  return <p className={entryStyle}>{text}</p>
}

const entryStyle = 'text-sm text-gray-600 py-1'

export default TextDashboardEntry
