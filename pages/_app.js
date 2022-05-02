import '../styles/globals.scss'
import AOS from 'aos'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
