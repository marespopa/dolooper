import React from 'react'

type Props = {
  text: string
}

const DashboardEntry = ({ text }: Props) => {
  return <p className={entryStyle}>{text}</p>
}

const entryStyle = 'text-xs text-gray-800 py-1'

export default DashboardEntry
