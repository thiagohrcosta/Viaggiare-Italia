import Head from 'next/head'
import { HomeContent } from '../src/components/Home'
import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'
import { DestinationContextProvider } from '../src/context/destinationContext'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DestinationContextProvider>
          <Navbar />
          <HomeContent />
          <Footer />
        </DestinationContextProvider>
      </main>
    </div>
  )
}
