import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function HomeModels() {
    return (
        <>
        <section className='models'>
            <div className='model'>
                <Link href='/trailers/bLMack'>
                    <Image 
                            src="/images/vintageBigMack.jpg" 
                            alt="..."
                            width={300}
                            height={200}
                            className={utilStyles.modelImg}
                    />
                </Link>
                <Link href='/trailers/bLMack'>
                <h6>Big & Little Mack</h6>
                </Link>
            </div>
            <div className='model'>
                <Link href='/trailers/tinyMack'>
                    <Image 
                            src="/images/logo.png"  
                            alt="..."
                            width={200}
                            height={200}
                            className={utilStyles.modelImg}
                    />
                </Link>
                <Link href='/trailers/tinyMack'>
                    <h6>Tiny or Single Mack</h6>
                </Link>
            </div>
            <div className='model'>
                <Link href='/trailers/vagabond'> 
                    <Image 
                            src="/images/logo.png"  
                            alt="..."
                            width={200}
                            height={200}
                            className={utilStyles.modelImg}
                    />
                </Link>
                <Link href='/trailers/vagabond'>
                    <h6>Vagabond</h6>
                </Link>
            </div>
            <div className='model'>
                <Link href='/trailers/offRoader'>
                    <Image 
                            src="/images/logo.png"  
                            alt="..."
                            width={200}
                            height={200}
                            className={utilStyles.modelImg}
                    />
                </Link>
                <Link href='/trailers/offRoader'>
                    <h6>Off-Roader</h6>
                </Link>
            </div>
            <div className='model'>
                <Link href='/trailers/tailgater'>
                    <Image 
                            src="/images/logo.png"  
                            alt="..."
                            width={200}
                            height={200}
                            className={utilStyles.modelImg}
                    />
                </Link>
                <Link href='/trailers/tailgater'>
                    <h6>Tailgater</h6>
                </Link>
            </div>
            <div className='model'>
                <Link href='/trailers/specialTrailer'>
                    <Image 
                            src="/images/logo.png"  
                            alt="..."
                            width={200}
                            height={200}
                            className={utilStyles.modelImg}
                    />
                </Link>
                <Link href='/trailers/specialTrailer'>
                    <h6>Special Trailer</h6>
                </Link>
            </div>
        </section>
        <style jsx>{`
            .models {
                border: 1px solid red;
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: center;
            }

            .model {
                width: 45%;
                color: white;
                border: 1px solid blue;
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;
                font-size: 2.5rem;
            }
        `}</style>
        </>
    )
}