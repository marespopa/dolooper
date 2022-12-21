import React from 'react'
import Link from 'next/link'
import Container from '../container/Container.component'
import logo from '../../public/logo.svg'
import Image from 'next/image'

const GlobalNavigation = () => {
  const logoHeight = 24

  return (
    <header className="flex items-center h-14 text-gray-800 bg-amber-100">
      <Container>
        <nav>
          <ul>
            <li>
              <Link
                href="/"
                className="flex items-center text-sm font-medium text-left"
              >
                <Image src={logo} alt="Devxloper" height={logoHeight} />
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default GlobalNavigation
