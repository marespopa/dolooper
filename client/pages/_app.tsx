import '../styles/globals.scss'
import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
