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
                <Link href='/'>
                    <a>Trailers</a>
                </Link>
            </div>
        </div>
    )
}