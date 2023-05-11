import React from 'react'

type Props = {
  title: string
  description: string
}

const Feature = ({ title, description }: Props) => {
  return (
    <div className={containerStyle}>
      <div className={divStyle}>
        <div className="px-4 py-5 flex-auto">
          <h2 className="text-xl my-4 sm:my-6 font-semibold">{title}</h2>
          <p className="mt-2 mb-4 text-gray-800 dark:text-white text-center px-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

const containerStyle = `w-full md:w-1/2 px-4 text-center`
const divStyle = `bg-white shadow-sm border border-gray-100 dark:bg-gray-600 dark:text-white dark:border-gray-600 relative flex flex-col
                    min-w-0 break-words w-full mb-8 `
export default Feature
