import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '../container/Container.component'
import logoLight from '../../public/logo-light.svg'
import logoDark from '../../public/logo-dark.svg'

import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { useTheme } from 'next-themes'
import TwitterButton from './TwitterButton'

const GlobalNavigation = () => {
  const logoHeight = 32
  const { theme } = useTheme()
  const logoImg = theme === 'dark' ? logoDark : logoLight
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="w-full text-gray-800 bg-amber-100 z-10 dark:bg-gray-600 dark:text-white">
      <nav>
        <Container>
          <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
            <div>
              <div className="flex items-center justify-center lg:justify-between py-3 md:py-5 md:block">
                <Link href="/">
                  <Image src={logoImg} alt="Dolooper" height={logoHeight} />
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-between py-3 md:py-5">
              <TwitterButton />
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default GlobalNavigation
