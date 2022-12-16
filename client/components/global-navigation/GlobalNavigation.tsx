import React from 'react'
import Link from 'next/link'
import Container from '../container/Container.component'

const GlobalNavigation = () => {
  const logoHeight = 156

  return (
    <header className="flex items-center h-14 text-white bg-indigo-800">
      <Container>
        <nav>
          <ul>
            <li>
              <Link href="/" className="text-sm font-medium text-center">
                dev<span className="text-indigo-100">x</span>loper
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default GlobalNavigation
