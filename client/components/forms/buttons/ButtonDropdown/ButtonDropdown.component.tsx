import React, { useState } from 'react'
import ButtonDropdownMenu from './ButtonDropdownMenu.component'
import ThreeDotsSVG from './ThreeDotsSVG'

export type menuItem = {
  id: string
  label: string
  action: (key: string) => void
}

interface Props {
  name: string
  label: string
  menuItems: menuItem[]
}

const ButtonDropdownComponent = ({ name, label, menuItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  const dropdownLabelledBy = `${name}-dropdown`

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          id={name}
          onClick={handleOpen}
          data-dropdown-toggle={dropdownLabelledBy}
          className={dropdownButtonStyle}
          aria-expanded="true"
          aria-haspopup="true"
          type="button"
        >
          {label}
          <ThreeDotsSVG />
        </button>
      </div>

      {isOpen && (
        <ButtonDropdownMenu
          labelledBy={dropdownLabelledBy}
          menuItems={menuItems}
        />
      )}
    </div>
  )
}

const dropdownButtonStyle = `inline-block px-1 py-1.5 bg-gray-600 text-white font-medium text-xs
                            leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg
                            focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800
                            active:shadow-lg transition duration-150 ease-in-out items-center whitespace-nowrap`

export default ButtonDropdownComponent
