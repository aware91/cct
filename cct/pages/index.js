import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Center Creek Teardrops</title>
      </Head>
      <div className={utilStyles.heading}>
        <Image 
          src='/images/logo.png'
          alt='Center Creek Teardrops Logo'
          height={200}
          width={200}
        />
        <h1>Destination Everywhere</h1>
        <h3>Get ready to experience your passion on the road.</h3>
      </div>
      <div>
        <p className={utilStyles.addBar}>
          Center Creek Teardrops Trailers & Campers • 806 Joplin Street • Carl Junction, Missouri 64834 • tel. (417) 649-6000
        </p>
      </div>
    </div>
  )
}
