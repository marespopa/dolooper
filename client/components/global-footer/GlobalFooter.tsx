import Link from 'next/link'
import React from 'react'
import Container from '../container'

const GlobalFooter = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-5 bg-gray-800 dark:bg-gray-900">
      <Container>
        <div className="text-gray-200">
          <p className="text-2xl mt-4 text-left">Plan. Focus. Execute. </p>
          <div className="my-4 flex flex-col md:flex-row md:justify-between items-left text-sm text-gray-400">
            <p className="mt-2 order-2 md:order-1 md:mt-0">
              &copy;{' '}
              <a
                href="https://www.marespopa.com/"
                className="hover:underline focus:underline"
              >
                Mares Popa
              </a>{' '}
              {currentYear}. All rights reserved
            </p>
            <div className="order-1 md:order-2 flex flex-col sm:flex-row">
              <span className={footerLinkWithBorderStyle}>
                <a href="mailto:hello@marespopa.com">Email</a>
              </span>
              <span className={footerLinkWithBorderStyle}>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

const footerLinkStyle = `my-2 sm:my-0 sm:border-0 sm:px-2 cursor-pointer hover:underline focus:underline dark:border-gray-600`
const footerLinkWithBorderStyle = `${footerLinkStyle} sm:border-l`

export default GlobalFooter
