import Link from 'next/link'
import React from 'react'
import Container from '../container'

const GlobalFooter = () => {
  return (
    <footer className="py-5 bg-gray-800 text-gray-100">
      <Container>
        <nav className="my-5">
          <ul>
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm font-medium text-center capitalize underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
      <Container>
        <p className="text-sm font-medium text-center capitalize">
          copyright{' '}
          <a
            className="underline"
            href="https://marespopa.com"
            target="_blank"
            rel="noreferrer"
          >
            Mares Popa
          </a>{' '}
          © {new Date().getFullYear()}. All rights reserved
        </p>
      </Container>
    </footer>
  )
}

export default GlobalFooter
