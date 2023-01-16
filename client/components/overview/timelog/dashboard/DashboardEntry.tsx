import React from 'react'

interface Props {
  title: string
  text: string
  subtitle: string
  variant: 'info' | 'warning'
}

const DashboardEntry = ({ title, text, subtitle, variant }: Props) => {
  const variantBg = {
    info: 'bg-blue-100',
    warning: 'bg-amber-100',
  }

  return (
    <div className={`${variantBg[variant]} p-6 relative rounded-xl`}>
      <div className="flex items-center justify-between">
        <p className="font-medium ">{title}</p>
      </div>
      <div className="flex items-center justify-between md:flex-col md:items-start">
        <p className="text-xl text-center font-light md:text-3xl">{text}</p>
        <p className="text-xs text-center text-text-200">{subtitle}</p>
      </div>
    </div>
  )
}

export default DashboardEntry
