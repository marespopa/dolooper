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

const tabContainerStyle = `flex flex-wrap gap-2 text-sm m-2`

const tabStyles = `px-4 py-2 text-gray-700 bg-blue-200 dark:text-white dark:bg-slate-700 rounded-md`
const activeTabStyles = `px-4 py-2 text-gray-700 bg-blue-300 dark:text-gray-700 dark:bg-blue-300 rounded-md`

export default Tabs
