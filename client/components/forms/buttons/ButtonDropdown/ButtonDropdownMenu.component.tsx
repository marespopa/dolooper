import React from 'react'
import { menuItem } from './ButtonDropdown.component'

interface Props {
  menuItems: menuItem[]
  labelledBy: string
}

const ButtonDropdownMenu = ({
  menuItems,
  labelledBy = 'buttonDropdownMenu',
}: Props) => {
  return (
    <div
      className={menuStyles}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby={labelledBy}
    >
      <ul className="py-1" role="none">
        {menuItems.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => item.action(item.id)}
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id={`${labelledBy}-item-${index}`}
            >
              {item.label}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const menuStyles = `absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black 
  ring-opacity-5 focus:outline-none`

export default ButtonDropdownMenu
