import Image from 'next/image'


export default function HomeSlideShow() {
    return (
        <div>
            <div classNameName='pic-ctn'>
                <div classNameName="carousel-item active">
                <Image 
                    src="/images/logo.png" 
                    classNameName="pic" 
                    alt="..."
                    width={200}
                    height={200}
                />
                </div>
                <div classNameName="carousel-item">
                <Image 
                    src="/images/OR-mnt.jpeg" 
                    classNameName="pic" 
                    alt="..."
                    width={200}
                    height={200}
                />
                </div>
                <div classNameName="carousel-item">
                <Image 
                    src="/images/vintageBigMack.jpg" 
                    classNameName="pic" 
                    alt="..."
                    width={200}
                    height={200}
                />
                </div>
            </div>
            <style jsx>{`
                .pic-ctn {
                    width: 100vw;
                    height: 200px;
                    }
                    
                @keyframes display {
                    0% {
                    transform: translateX(200px);
                    opacity: 0;
                    }
                    10% {
                    transform: translateX(0);
                    opacity: 1;
                    }
                    20% {
                    transform: translateX(0);
                    opacity: 1;
                    }
                    30% {
                    transform: translateX(-200px);
                    opacity: 0;
                    }
                    100% {
                    transform: translateX(-200px);
                    opacity: 0;
                    }
                }
                
                .pic-ctn {
                    position: relative;
                    width: 100vw;
                    height: 300px;
                    margin-top: 15vh;
                }
                
                .pic-ctn > img {
                    position: absolute;
                    top: 0;
                    left: calc(50% - 100px);
                    opacity: 0;
                    animation: display 10s infinite;
                }
                
                img:nth-child(2) {
                    animation-delay: 2s;
                }
                img:nth-child(3) {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    )
}