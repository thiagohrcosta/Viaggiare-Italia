import Head from 'next/head'
import { Destinations } from '../src/components/Home/Destionations'
import { Banner } from '../src/components/Home/Banner'
import { HomeContent } from '../src/components/Home'
import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <HomeContent />
        <Footer />
      </main>
    </div>
  )
}
