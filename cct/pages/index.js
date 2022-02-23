import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Center Creek Teardrops</title>
      </Head>
      <section>
        <Image 
          src='/images/logo.png'
          alt='Center Creek Teardrops Logo'
          height={200}
          width={200}
        />
        <h1>Destination Everywhere</h1>
        <h3>Get ready to experience your passion on the road.</h3>
      </section>
    </div>
  )
}
