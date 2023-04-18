import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import logoLight from '../../public/logo-light.svg'
import logoDark from '../../public/logo-dark.svg'

const GlobalLogo = () => {
  const logoHeight = 32 //px
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const logoImg = currentTheme === 'dark' ? logoDark : logoLight

  return (
    <div className="flex items-center justify-center lg:justify-between py-3 md:py-5 md:block">
      <Link href="/">
        <Image src={logoImg} alt="Dolooper" height={logoHeight} />
      </Link>
    </div>
  )
}

export default GlobalLogo
