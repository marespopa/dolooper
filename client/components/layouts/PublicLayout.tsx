import { ReactNode } from 'react'
import CookieConsent from '../banners/CookieConsent'
import GlobalFooter from '../global-footer/GlobalFooter'
import GlobalNavigation from '../global-navigation/GlobalNavigation'
import Notification from '../notification/Notification'

type Props = { children: ReactNode; hasFlatBg?: boolean }

const PublicLayout = ({ children, hasFlatBg = false }: Props) => {
  const bgColor = hasFlatBg
    ? 'text-gray-800 bg-amber-100 dark:bg-gray-700 dark:text-white'
    : `text-gray-700 bg-gradient-to-b from-amber-50 via-stone-100 to-amber-100 
       dark:text-white dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-700 dark:to-gray-600`

  return (
    <>
      <div className="flex flex-col min-h-screen font-primary">
        <Notification />
        <GlobalNavigation />

        <main className={`flex-grow ${bgColor}`}>{children}</main>
        <GlobalFooter />
        <CookieConsent />
      </div>
    </>
  )
}

export default PublicLayout
