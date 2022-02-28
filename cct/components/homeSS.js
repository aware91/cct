import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'


export default function HomeSlideShow() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <Image 
                    src="/images/logo.png" 
                    className="d-block w-100" 
                    alt="..."
                    width={200}
                    height={200}
                />
                </div>
                <div className="carousel-item">
                <Image 
                    src="/images/OR-mnt.jpeg" 
                    className="d-block w-100" 
                    alt="..."
                    width={200}
                    height={200}
                />
                </div>
                <div className="carousel-item">
                <Image 
                    src="/images/vintageBigMack.jpg" 
                    className="d-block w-100" 
                    alt="..."
                    width={200}
                    height={200}
                />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    )
}

