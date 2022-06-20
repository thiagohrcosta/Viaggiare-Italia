import Head from 'next/head'
import { Destinations } from '../src/components/Home/Destionations'
import { Banner } from '../src/components/Home/Banner'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <Destinations />
      </main>
    </div>
  )
}
