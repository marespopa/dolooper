import React, { useEffect, useState } from 'react'
import Container from '../container/Container.component'

import ThemeToggle from './ThemeToggle'
import GlobalLogo from './GlobalLogo'

const GlobalNavigation = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="w-full text-gray-800 bg-amber-100 z-10 dark:bg-gray-700 dark:text-white">
      <nav>
        <Container>
          <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
            <div>
              <GlobalLogo />
            </div>
            <div className="flex justify-center lg:justify-between py-3 md:py-5">
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default GlobalNavigation
