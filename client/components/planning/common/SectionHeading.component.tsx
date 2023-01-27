import React from 'react'

interface Props {
  title: string
  description: string
  subHeading?: string
}

const SectionHeading = ({ title, description, subHeading }: Props) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mt-3 mb-3">{title}</h2>
      <p className="my-5 mx-auto text-xl">{description}</p>
      {subHeading && (
        <p className="text-xs text-gray-500 -mt-4 mb-4">{subHeading}</p>
      )}
    </div>
  )
}

export default SectionHeading
