import { ReactNode } from 'react'
import CookieConsent from '../banners/CookieConsent'
import GlobalFooter from '../global-footer/GlobalFooter'
import GlobalNavigation from '../global-navigation/GlobalNavigation'
import Notification from '../notification/Notification'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-primary">
        <Notification />
        <GlobalNavigation />

        <main className="flex-grow bg-gradient-to-b from-amber-100 via-stone-200 to-gray-200">
          {children}
        </main>
        <GlobalFooter />
        <CookieConsent />
      </div>
    </>
  )
}

export default PublicLayout
