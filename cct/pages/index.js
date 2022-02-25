import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import AddBar from '../components/addBar'
import Nav from '../components/nav'
import HomeSS from '../components/homeSlideShow'

export default function Home() {
  return (
    <>
      <Head>
        <title>Center Creek Teardrops</title>
      </Head>
      {/* Navbar */}
      <Nav />
      {/* Top section with logo */}
      <section className={utilStyles.heading}>
        <Image 
          src='/images/logo.png'
          alt='Center Creek Teardrops Logo'
          height={200}
          width={200}
        />
        <h1>Destination Everywhere</h1>
        <h3>Get ready to experience your passion on the road.</h3>
      </section>
      {/* Address Bar */}
      <AddBar />
      {/* First section talking about Center Creek Teardrops */}
      <section className='sec1'>
        <div className='sec1-1'>
          <h3>CENTER CREEK CUSTOM TEARDROP CAMPERS</h3>
          <p>At Center Creek Teardrops, we believe it’s important to never forget to set time aside to get away from it all, whether for just a weekend or going for extended time period.  The ability to explore and recenter ourselves with the things we enjoy should become a priority.  At Center Creek Teardrops, we have created custom teardrop campers perfect for just about anyone. With the ability to personalize nearly every element of our lightweight campers and follow their production, you’ll be ready to hit the road in no time.  </p>
          <h4>Welcome to a new experience on the road. </h4>
        </div>
        <Image 
          src='/images/vintageBigMack.jpg'
          alt='Vintage Big Mack'
          height={300}
          width={500}
        />
      </section>
      {/* Second section talking about different trailers */}
      <section>
        {/* <HomeSS /> */}
        <div>
          <p>Do you ever go look at teardrops and think, I like that, but not that?  I love the trailer, but I wish I could use that space for something else.  At Center Creek Teardrops, we custom build for each customer.  We sit down and discuss how and where you will be using your teardrop.</p>
          <p>We have single ladies that want something lightweight and easy to pull to a regular campsite.  We have couples that want to go off-roading and explore where there are no roads.  We have others that want to travel, and golf on courses throughout the country.  We have a photographer/videographer that can travel and work where the whim takes him, and we have a couples that wanted to have something to pull behind their trike.</p>
          <p>Where do you want to go?  What do you want to explore?  Your Destination is Everywhere. </p>
        </div>
      </section>

      {/* Styles for just this page */}
      <style jsx>{`
        .sec1 {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          align-items: center;
          padding: 15px 0;
        }
        .sec1-1 {
          width: 45%
        }
      `}</style>
    </>
  )
}
