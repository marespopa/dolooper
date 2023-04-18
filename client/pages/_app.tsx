import '../styles/globals.scss'
import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'

const defaultFont = Montserrat({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
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
      <Script strategy="lazyOnload" id="googleAnalytics">
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
