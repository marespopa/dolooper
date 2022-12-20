import { ReactNode } from 'react'
import CookieConsent from '../banners/CookieConsent'
import GlobalFooter from '../global-footer/GlobalFooter'
import GlobalNavigation from '../global-navigation/GlobalNavigation'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-primary bg-white">
        <GlobalNavigation />
        <main className="flex-grow bg-amber-50">{children}</main>
        <GlobalFooter />
        <CookieConsent />
      </div>
    </>
  )
}

export default PublicLayout
