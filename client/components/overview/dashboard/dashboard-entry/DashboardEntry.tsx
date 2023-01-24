import React from 'react'

interface Props {
  title: string
  text: string
  variant: 'gray' | 'amber' | 'blue'
  subtitle?: string
}

const DashboardEntry = ({ title, text, variant, subtitle }: Props) => {
  const variantBg = {
    gray: 'bg-gray-100',
    blue: 'bg-blue-100',
    amber: 'bg-amber-100',
    yellow: 'bg-yellow-100',
  }

  return (
    <div
      className={`${variantBg[variant]} p-6 relative rounded-xl text-center`}
    >
      <div className="flex items-center justify-center">
        <p className="font-medium ">{title}</p>
      </div>
      <div className="flex items-center justify-center flex-col md:items-center">
        <p className="text-xl text-center font-light md:text-3xl">{text}</p>
        {subtitle && (
          <p className="sm:block hidden text-xs text-center text-text-200">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

export default DashboardEntry
