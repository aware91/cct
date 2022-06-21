import React from 'react';
import { Nav } from './Nav';
import logo from '../assets/logo.png'
import VBM from '../assets/vintageBigMack.jpg'
import '../styles/global.css'
import '../styles/home.css'
import AddressBar from './AddressBar';


export const Home = () => {
    return (
        <>
            <Nav />
            <section className='title'>
                <img src={logo} alt='Center Creek Teardrops Logo' height={300} width={350} />
                <h1>Destination Everywhere</h1>
                <h3>Get ready to experience your passion on the road.</h3>
            </section>
            <AddressBar />
            {/* section 1 */}
            <section className='sect1'>
                <div className='sect1Img'>
                    <img 
                        src={VBM}
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
            {/* section 2 */}
            <section className='sect2'>
                <div className='sect2Par'>
                    <p>Do you ever go look at teardrops and think, I like that, but not that?  I love the trailer, but I wish I could use that space for something else.  At Center Creek Teardrops, we custom build for each customer.  We sit down and discuss how and where you will be using your teardrop.</p>
                    <p>We have single ladies that want something lightweight and easy to pull to a regular campsite.  We have couples that want to go off-roading and explore where there are no roads. We have others that want to travel, and golf on courses throughout the country.  We have a photographer/videographer that can travel and work where the whim takes him, and we have a couples that wanted to have something to pull behind their trike.</p>
                    <p>here do you want to go?  What do you want to explore?  Your Destination is Everywhere. </p>
                </div>
                <div className="pic-ctn">
                    <img src="https://picsum.photos/200/300?t=1" alt="" className="pic"/>
                    <img src="https://picsum.photos/200/300?t=2" alt="" className="pic"/>
                    <img src="https://picsum.photos/200/300?t=3" alt="" className="pic"/>
                    <img src="https://picsum.photos/200/300?t=4" alt="" className="pic"/>
                    <img src="https://picsum.photos/200/300?t=5" alt="" className="pic"/>
                </div>
                {/* <div className="pic-ctn">
                    <img src="../assets/OR-mnt.jpeg" alt="" className="pic"/>
                    <img src="../assets/OR.jpg" alt="" className="pic"/>
                    <img src="../assets/tinyMack.png" alt="" className="pic"/>
                    <img src="../assets/vagabond.jpg" alt="" className="pic"/>
                    <img src="../assets/vintageBigMack.jpg" alt="" className="pic"/>
                </div> */}
            </section>
            {/* Trailer options */}
            <section className='sect3'>
                <div className='sect3Words'>
                    <h3>The first step? Choosing a make and size.</h3>
                    <h5>Take a look at our offered camper models.</h5>
                </div>
                <div className='sect3HomeModels'>
                    <HomeModels />
                </div>
            </section>
        </>
    )
}