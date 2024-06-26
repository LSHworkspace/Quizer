// import '../../styles/globals.css'
// import type { AppProps } from 'next/app'
//
// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
//
// export default MyApp

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp