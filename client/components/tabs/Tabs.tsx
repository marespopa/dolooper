import React from 'react'

export type TabVariant = 'edit' | 'preview'

type Props = {
  activeTab: TabVariant
  handleTabChange: (_arg: TabVariant) => void
}

const Tabs = ({ activeTab, handleTabChange }: Props) => {
  return (
    <ul className={tabContainerStyle}>
      <li className={`${activeTab === 'edit' ? activeTabStyles : tabStyles}`}>
        <a href="#" aria-current="page" onClick={() => handleTabChange('edit')}>
          Edit
        </a>
      </li>
      <li
        className={`${activeTab === 'preview' ? activeTabStyles : tabStyles}`}
      >
        <a href="#" onClick={() => handleTabChange('preview')}>
          Preview
        </a>
      </li>
    </ul>
  )
}

const tabContainerStyle =
  'flex flex-wrap gap-2 text-sm px-4 rounded-t-md font-medium text-center border-b-2 border-gray-100 text-gray-600 dark:border-gray-700 dark:text-white py-2 bg-white dark:bg-gray-600'
const tabStyles = `px-4 py-2`
const activeTabStyles = `${tabStyles} text-white bg-blue-500 rounded-md`

export default Tabs
