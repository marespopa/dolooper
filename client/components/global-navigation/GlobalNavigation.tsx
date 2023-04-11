import React from 'react'
import Link from 'next/link'
import Container from '../container/Container.component'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import TwitterSVG from '../../icons/TwitterSVG'

const GlobalNavigation = () => {
  const logoHeight = 24
  const twitterLink = `https://twitter.com/intent/tweet?text=Get%20productive%20with%20dolooper!%20%20&url=
                      https%3A%2F%2Fdolooper.netlify.com%2F`

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
            <div className="flex lg:justify-between py-3 md:py-5">
              <a
                href={twitterLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:underline"
              >
                <TwitterSVG /> <span className="ml-2">Share on twitter</span>
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default GlobalNavigation
