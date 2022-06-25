import Head from 'next/head'
import { Destinations } from '../src/components/Home/Destionations'
import { Banner } from '../src/components/Home/Banner'
import { HomeContent } from '../src/components/Home'
import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'
import { DataContextProvider } from '../src/hooks/dataContext'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DataContextProvider>
          <Navbar />
          <HomeContent />
          <Footer />
        </DataContextProvider>
      </main>
    </div>
  )
}
