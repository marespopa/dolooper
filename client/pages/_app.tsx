import '../styles/globals.scss'
import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'

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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
