import Link from 'next/link'
import Cookies from 'js-cookie'
import { MouseEvent, useEffect, useState } from 'react'
import Container from '../container'

const USER_CONSENT_COOKIE_KEY = 'cookie_consent_is_true'
const USER_CONSENT_COOKIE_EXPIRE_DAYS = 7

const CookieConsent = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true)

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === 'true'
    setCookieConsentIsTrue(consentIsTrue)
  }, [])

  const handleAccept = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, 'true', {
        expires: USER_CONSENT_COOKIE_EXPIRE_DAYS,
      })
      setCookieConsentIsTrue(true)
    }
  }

  if (cookieConsentIsTrue) {
    return null
  }

  return (
    <section className="fixed bottom-0 right-0 w-full md:w-1/2 py-2 md:py-4">
      <Container>
        <div className="flex flex-col items-start px-5 py-3 space-y-2 bg-gray-200 md:flex-row md:space-y-0 md:items-stretch md:space-x-2">
          <div className="flex items-center flex-grow text-gray-900">
            <p className="text-sm font-medium">
              This site uses services that uses cookies to deliver better
              experience and analyze traffic. You can learn more about the
              services we use at our{' '}
              <Link
                href="/privacy-policy"
                className="text-sm underline hover:text-lightAccent"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <button className={buttonStyle} onClick={handleAccept}>
              Accept all
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

const buttonStyle = `p-3 text-xs font-bold text-white bg-gray-600
                     hover:bg-gray-700 focus:bg-gray-700 whitespace-nowrap`

export default CookieConsent
