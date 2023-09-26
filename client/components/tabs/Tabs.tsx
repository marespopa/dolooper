import React from 'react'

type Props = {
  activeTab: 'edit' | 'preview'
  handleTabChange: (_arg: string) => void
}

const Tabs = ({ activeTab, handleTabChange }: Props) => {
  return (
    <ul className="flex flex-wrap text-sm px-4 py-2 rounded-t-md font-medium text-center text-gray-500 dark:text-gray-400 dark:bg-gray-600 bg-white">
      <li className="mr-2">
        <a
          href="#"
          aria-current="page"
          className={`${activeTab === 'edit' ? activeTabStyles : tabStyles}`}
          onClick={() => handleTabChange('edit')}
        >
          Edit
        </a>
      </li>
      <li className="mr-2">
        <a
          href="#"
          className={`${activeTab === 'preview' ? activeTabStyles : tabStyles}`}
          onClick={() => handleTabChange('preview')}
        >
          Preview
        </a>
      </li>
    </ul>
  )
}

const tabStyles = `inline-block px-4 py-3 rounded-lg text-sm hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white`
const activeTabStyles = `inline-block px-4 py-3 rounded-lg
    bg-blue-500 text-white font-medium text-sm leading-tight
    hover:bg-blue-600 cursor-pointer hover:shadow-sm focus:bg-blue-600 focus:shadow-sm
    focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-sm disabled:opacity-25 transition duration-150
    disabled:pointer-events-none ease-in-out active`

export default Tabs
