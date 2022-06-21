import Nav from '../../components/nav'

export default function TinyMack() {
    return(
        <div>
            <Nav />
            {/* Top section with logo */}
            <div className={utilStyles.homeBGImg}>
                <div className={utilStyles.heading}>
                    <Image 
                    src='/images/logo.png'
                    alt='Center Creek Teardrops Logo'
                    height={200}
                    width={200}
                    />
                    <h1>Vagabond Handmade Your Way</h1>
                    <h3>We build to suit your travel requirements</h3>
                </div>
            </div>
            {/* First Section */}
            <div>
                <p>
                    
                </p>
                <p>

                </p>
            </div>
            {/* Second section w/ 4 parts */}
            <div>
                
            </div>
        </div>
    )
}