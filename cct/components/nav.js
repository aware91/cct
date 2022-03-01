import Image from 'next/image'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'



export default function Nav() {
    return (
        <div>
            <section className={utilStyles.nb}>
                <div className='img'>
                    <Image 
                        src='/images/logo.png'
                        alt='Center Creek Teardrops Logo'
                        height={75}
                        width={75}
                    />
                </div>
                <section className={utilStyles.links}>
                    <Link href='/'>
                        <a className={utilStyles.a}>Home</a>
                    </Link>
                    <Link href='/ourStory'>
                        <a className={utilStyles.a}>Our Story</a>
                    </Link>
                    <div className={utilStyles.dropdown}>
                        <Link href='/trailers'>
                            <a className={utilStyles.a}>Trailers ▼</a>
                        </Link>
                        <div className={utilStyles.dropdownContent}>
                            <Link href='/trailers/bLMack'>
                                <a>Big Mack & Little Mack</a>
                            </Link>
                            <Link href='/trailers/tinyMack'>
                                <a>Tiny Mack</a>
                            </Link>
                            <Link href='/trailers/vagabond'>
                                <a>Vagabond</a>
                            </Link>
                            <Link href='/trailers/offRoader'>
                                <a>Off-Roaders</a>
                            </Link>
                            <Link href='/trailers/tailgater'>
                                <a>tailgater</a>
                            </Link>
                            <Link href='/trailers/specialTrailer'>
                                <a>Special Trailer</a>
                            </Link>
                        </div>
                    </div>
                    <Link href='/rentals'>
                        <a className={utilStyles.a}>Rentals</a>
                    </Link>
                    <Link href='/contactUs'>
                        <a className={utilStyles.a}>Contact Us</a>
                    </Link>
                </section>
            </section>
        </div>
    )
}