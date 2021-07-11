import '../index.css'
import Head from 'next/head'
import type {AppProps} from "next/app";

export default function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>React App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}
