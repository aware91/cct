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
                            width={500}
                            height={350}
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
                            src="/images/tinyMack.png"  
                            alt="..."
                            width={500}
                            height={350}
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
                            src="/images/vagabond2.jpg"  
                            alt="..."
                            width={500}
                            height={350}
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
                            src="/images/OR.jpg"  
                            alt="..."
                            width={500}
                            height={350}
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
                            width={500}
                            height={350}
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
                            src="/images/vagabond.jpg"  
                            alt="..."
                            width={500}
                            height={350}
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
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: center;
            }

            .model {
                width: 45%;
                color: white;
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;
            }

            .model h6 {
                color: white;
                font-size: 2rem;
                margin: 20px 0;
                text-shadow: 
                        1px 0px 0px black,
                        -1px 0px 0px black,
                        0px 1px 0px black, 
                        0px -1px 0px black;
            }
        `}</style>
        </>
    )
}