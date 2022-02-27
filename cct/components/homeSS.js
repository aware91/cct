import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'


export default function HomeSlideShow() {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                <Image 
                    src="/images/logo.png" 
                    class="block w-full" 
                    alt="..."
                    width={200}
                    height={200}
                />
                </div>
                <div class="carousel-item active relative float-left w-full">
                <Image 
                    src="/images/OR-mnt.jpeg" 
                    class="block w-full"
                    alt="..."
                    width={200}
                    height={200}
                />
                </div>
                <div class="carousel-item active relative float-left w-full">
                <Image 
                    src="/images/vintageBigMack.jpg" 
                    class="block w-full"
                    alt="..."
                    width={200}
                    height={200}
                />
                </div>
            </div>
        </div>
    )
}
