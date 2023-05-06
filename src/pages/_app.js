
import Footer from '@/layout/GlobalComponents/Footer'
import NavBar from '@/layout/GlobalComponents/NavBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
