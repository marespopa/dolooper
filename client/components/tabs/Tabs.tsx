import React from 'react'

export type Tab = {
  id: number
  name: TabVariant
  label: string
}

export type TabVariant = 'preview' | 'edit'

type Props = {
  tabs: Array<Tab>
  activeTab: TabVariant
  handleTabChange: (_arg: TabVariant) => void
}

const Tabs = ({ tabs, activeTab, handleTabChange }: Props) => {
  return (
    <ul className={tabContainerStyle}>
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={`${activeTab === tab.name ? activeTabStyles : tabStyles}`}
        >
          <a
            href="#"
            aria-current="page"
            onClick={() => handleTabChange(tab.name)}
          >
            {tab.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

const tabContainerStyle = `flex flex-wrap gap-2 text-sm p-2 my-2 bg-white dark:bg-slate-600 shadow-sm rounded-md`

const tabStyles = `px-4 py-2 text-gray-700 bg-amber-50 dark:text-white dark:bg-slate-700 rounded-md`
const activeTabStyles = `px-4 py-2 text-gray-700 bg-blue-200 dark:text-gray-700 dark:bg-blue-300 rounded-md`

export default Tabs
