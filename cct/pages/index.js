import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import AddBar from '../components/addBar'
import Nav from '../components/nav'
import HomeSS from '../components/homeSS'
import HomeModels from '../components/homeModels'
import Footer from '../components/footer'
import TestCarousel from '../components/testCarousel'

export default function Home() {
    return (
        <div>
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
            <TestCarousel />
            {/* First section talking about Center Creek Teardrops */}
            <section className={utilStyles.sect1}>
            <div className='sect1Img'>
                    <Image 
                        src='/images/vintageBigMack.jpg'
                        alt='Vintage Big Mack'
                        height={300}
                        width={500}
                    />
                </div>
                <div className='sect1Par'>
                    <h3>CENTER CREEK CUSTOM TEARDROP CAMPERS</h3>
                    <p>At Center Creek Teardrops, we believe it’s important to never forget to set time aside to get away from it all, whether for just a weekend or going for extended time period.  The ability to explore and recenter ourselves with the things we enjoy should become a priority.  At Center Creek Teardrops, we have created custom teardrop campers perfect for just about anyone. With the ability to personalize nearly every element of our lightweight campers and follow their production, you’ll be ready to hit the road in no time.  </p>
                    <h4>Welcome to a new experience on the road. </h4>
                </div>
                
            </section>
            {/* Second Section */}
            <section className={utilStyles.sect2}>
                <div className='sect2Par'>
                    <p>Do you ever go look at teardrops and think, I like that, but not that?  I love the trailer, but I wish I could use that space for something else.  At Center Creek Teardrops, we custom build for each customer.  We sit down and discuss how and where you will be using your teardrop.</p>
                    <p>We have single ladies that want something lightweight and easy to pull to a regular campsite.  We have couples that want to go off-roading and explore where there are no roads. We have others that want to travel, and golf on courses throughout the country.  We have a photographer/videographer that can travel and work where the whim takes him, and we have a couples that wanted to have something to pull behind their trike.</p>
                    <p>here do you want to go?  What do you want to explore?  Your Destination is Everywhere. </p>
                </div>
                <div className='sect2Img'>
                <HomeSS />
                </div>
            </section>
            {/* Trailer options */}
            <section className={utilStyles.sect3}>
                <div>
                    <h3>The first step? Choosing a make and size.</h3>
                    <h5>Take a look at our offered camper models/</h5>
                </div>
                <div className='sect3HomeModels'>
                    <HomeModels />
                </div>
            </section>
            {/* Footer */}
            <section>
                <div>
                    <Footer />
                </div>
            </section>
            <style jsx>{`
                .sect1Par {
                    width: 45%;
                    margin-right: 15px;
                }
                
                .sect1Par p {
                    text-align: justify;
                }

                .sect1Img {
                    width: 45%;
                    display: flex;
                    flex-flow: row;
                    align-items: center;
                    justify-content: center;
                }

                .sect2Par {
                    width: 45%;
                    margin-left: 25px;
                    text-align: justify;
                    color: white;
                }

                .sect2Img {
                    width: 45%;
                    display: flex;
                    flex-flow: row;
                    align-items: center;
                    justify-content: center;
                }
                
                .sect3HomeModels {
                    width: 100%;
                }
            `}</style>
        </div>
    )
}