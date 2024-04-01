import '../styles/globals.scss'
import '../node_modules/highlight.js/styles/nord.css'

import { Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { useEffect } from 'react'

const defaultFont = Montserrat({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((reg) => {
            console.log('Service worker registered', reg)
          })
          .catch((err) => {
            console.log('Service worker registration failed', err)
          })
      })
    }
  }, [])

  return (
    <>
      <style jsx global>
        {`
          :root {
            --default-font: ${defaultFont.style.fontFamily};
          }
        `}
      </style>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="googleAnalytics" defer>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
