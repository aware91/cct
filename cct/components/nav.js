import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'



export default function Nav() {
    return (
        <div>
            <Image 
                src='/images/logo.png'
                alt='Center Creek Teardrops Logo'
                height={75}
                width={75}
            />
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/ourStory'>
                    <a>Our Story</a>
                </Link>
                <div className={utilStyles.dropdown}>
                    <Link href='/' className={utilStyles.dropbtn}>
                        <a>Trailers</a>
                    </Link>
                    <div className={utilStyles.dropdownContent}>
                        <Link href='/trailers/bigMackLittleMack'>
                            <a>Big Mack & Little Mack</a>
                        </Link>
                        <Link href='/trailers/tinyMack'>
                            <a>Tiny Mack</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}