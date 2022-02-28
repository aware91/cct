import Image from 'next/image'

export default function HomeModels() {
    return (
        <>
        <section className='models'>
            <div className='model'>
                <Image 
                        src="/images/vintageBigMack.jpg" 
                        alt="..."
                        width={200}
                        height={200}
                />
                <h6>Big & Little Mack</h6>
            </div>
            <div className='model'>
                <Image 
                        src="/images/logo.png"  
                        alt="..."
                        width={200}
                        height={200}
                />
                <h6>Tiny or Single Mack</h6>
            </div>
            <div className='model'>
                <Image 
                        src="/images/logo.png"  
                        alt="..."
                        width={200}
                        height={200}
                />
                <h6>Vagabond</h6>
            </div>
            <div className='model'>
                <Image 
                        src="/images/logo.png"  
                        alt="..."
                        width={200}
                        height={200}
                />
                <h6>Off-Roader</h6>
            </div>
            <div className='model'>
                <Image 
                        src="/images/logo.png"  
                        alt="..."
                        width={200}
                        height={200}
                />
                <h6>Tailgater</h6>
            </div>
            <div className='model'>
                <Image 
                        src="/images/logo.png"  
                        alt="..."
                        width={200}
                        height={200}
                />
                <h6>Special Trailer</h6>
            </div>
        </section>
        <style jsx>{`
            .models {
                display: flex;
                flex-flow: row wrap;
                
            }

            .model {
                width: 45%;
            }
        `}</style>
        </>
    )
}