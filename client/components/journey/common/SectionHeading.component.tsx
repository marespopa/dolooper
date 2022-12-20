import React from 'react'

interface Props {
  title: string
  description: string
}

const SectionHeading = ({ title, description }: Props) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mt-3 mb-3">{title}</h2>
      <p className="my-5 mx-auto text-xl">{description}</p>
    </div>
  )
}

export default SectionHeading
