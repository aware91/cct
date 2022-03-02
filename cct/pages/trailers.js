import Nav from '../components/nav'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaravan } from '@fortawesome/free-solid-svg-icons'
import HomeModels from '../components/homeModels'
import Footer from '../components/footer'

export default function Trailers() {
    return(
        <>
            <Head>
                <title>Trailers</title>
                <script src="https://kit.fontawesome.com/b34fb3e141.js" crossorigin="anonymous"></script>
            </Head>
            <Nav />
            {/* Header Section */}
            <section className={utilStyles.trailerBGImg}>
                <div className={utilStyles.heading}>
                    <Image 
                    src='/images/logo.png'
                    alt='Center Creek Teardrops Logo'
                    height={200}
                    width={200}
                    />
                    <h1>Destination Everywhere</h1>
                    <h3>Get ready to experience your passion on the road.</h3>
                    <p>Because of our flexibility with customization, Center Creek Teardrops will always be able to create a camper perfect for your needs.  Our base models come with everything you need to camp but upgrading can make it as unique as the owner.  Check out each model to see what options are perfect for you</p>
                </div>
            </section>
            {/* Section 1 */}
            <section className='sect1'>
                <FontAwesomeIcon icon={faCaravan} style={{fontSize: 100, color: '#021731'}} />
                <div className='sect1Words'>
                    <h3>High-Quality. Period.</h3>
                    <h4>Handcrafted to our high-quality standards.</h4>
                    <p>We don’t cut corners. We strive to create not only a quality camper for our customers, but also a worthwhile relationship.  The most important part of our process is capturing the camper’s owner in the design, making sure each and every individual teardrop is perfectly fit to the person pulling it and their needs.  Each teardrop is made from only the highest quality materials we can get our hands on, allowing us to guarantee their ability to withstand even the toughest weather and outdoor conditions.  At the end of the day, your camper needs to be able to last as long as your adventurous spirit can, and ours are some of the few that can truly stick with you through it all.</p>
                </div>
            </section>
            {/* Trailer Models */}
            <section className={utilStyles.trailerSect2}>
                <h5>First Step? Choose a make and size.</h5>
                <HomeModels />
            </section>
            {/* Footer */}
            <section>
                <div>
                    <Footer />
                </div>
            </section>
            <style jsx>{`
                .sect1 {
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-items: center;
                    width: 75%;
                    margin: auto;
                }

                .sect1Words {
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-items: center;
                }

                h3 {
                    font-size: 2.25rem;
                    margin: 0;
                    padding: 0;
                }

                h4 {
                    font-size: 1.75rem;
                    margin: 15px 0;
                    padding: 0;
                }

                h5 {
                    font-size: 2rem;
                    text-shadow: 
                        1px 0px 0px #FBFBFB,
                        -1px 0px 0px #FBFBFB,
                        0px 1px 0px #FBFBFB, 
                        0px -1px 0px #FBFBFB;
                }
                p {
                    text-align: justify;
                }
            `}</style>
        </>
    )
}