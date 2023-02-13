import React from 'react'
import Link from 'next/link'
import Container from '../container/Container.component'
import logo from '../../public/logo.svg'
import Image from 'next/image'

const GlobalNavigation = () => {
  const logoHeight = 24

  return (
    <header className="w-full text-gray-800 bg-amber-100 sticky top-0 z-10">
      <nav>
        <Container>
          <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
            <div>
              <div className="flex items-center justify-center lg:justify-between py-3 md:py-5 md:block">
                <Link href="/">
                  <Image src={logo} alt="Doloper" height={logoHeight} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default GlobalNavigation
