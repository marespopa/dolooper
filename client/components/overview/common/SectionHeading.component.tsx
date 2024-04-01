import React from 'react'
import { HiOutlineChevronDown, HiOutlineChevronRight } from 'react-icons/hi'

interface Props {
  title: string
  description: string
  subHeading?: string
  isExpanded: boolean
  handleToggle: () => void
}

const SectionHeading = ({
  title,
  description,
  subHeading,
  isExpanded,
  handleToggle,
}: Props) => {
  return (
    <div className="w-full">
      <h2
        className="text-3xl font-bold mt-3 mb-3 flex items-center gap-2 cursor-pointer"
        onClick={() => handleToggle()}
      >
        {title}{' '}
        {isExpanded ? <HiOutlineChevronRight /> : <HiOutlineChevronDown />}
      </h2>
      {isExpanded && (
        <>
          <p className="my-5 mx-auto text-xl">{description}</p>
          {subHeading && (
            <p className="text-xs text-gray-500 -mt-4 mb-4 dark:text-gray-400">
              {subHeading}
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default SectionHeading
