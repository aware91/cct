import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import AddBar from '../components/addBar'
import Nav from '../components/nav'
import HomeSS from '../components/homeSS'

export default function Home() {
    return (
        <>
        <Head>
            <title>Center Creek Teardrops</title>
        </Head>
        {/* Navbar */}
        <Nav />
        {/* Top section with logo */}
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
        {/* Address Bar */}
        <AddBar />
        {/* First section talking about Center Creek Teardrops */}
        <section>
            <HomeSS />
            <div>
                <h3>CENTER CREEK CUSTOM TEARDROP CAMPERS</h3>
                <p>At Center Creek Teardrops, we believe it’s important to never forget to set time aside to get away from it all, whether for just a weekend or going for extended time period.  The ability to explore and recenter ourselves with the things we enjoy should become a priority.  At Center Creek Teardrops, we have created custom teardrop campers perfect for just about anyone. With the ability to personalize nearly every element of our lightweight campers and follow their production, you’ll be ready to hit the road in no time.  </p>
                <h4>Welcome to a new experience on the road. </h4>
            </div>
        </section>
        </>
    )
}