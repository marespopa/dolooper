import React, { ReactNode } from 'react'

const ALERT_STYLE_TYPE_MAP = {
  error: 'bg-red-500 text-white',
  info: 'bg-amber-200 dark:text-white dark:bg-gray-600',
  warning: 'bg-amber-200 dark:bg-amber-600 dark:text-white',
  success: 'bg-teal-200 dark:bg-teal-600 dark:text-white',
} as const

type AlertType = 'error' | 'info' | 'success' | 'warning'

interface Props {
  children: ReactNode
  style: AlertType
}

const Alert = ({ children, style }: Props) => {
  return (
    <div className={`mb-4 p-4 ${ALERT_STYLE_TYPE_MAP[style]} flex`}>
      <span className="text-xs">{children}</span>
    </div>
  )
}

export default Alert
