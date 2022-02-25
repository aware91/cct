import Image from 'next/image'
import Link from 'next/link'



export default function Nav() {
    return (
        <div>
            <section className='nb'>
                <div className='img'>
                    <Image 
                        src='/images/logo.png'
                        alt='Center Creek Teardrops Logo'
                        height={75}
                        width={75}
                    />
                </div>
                <section className='links'>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <Link href='/ourStory'>
                        <a>Our Story</a>
                    </Link>
                    <div className='dropdown'>
                        <Link href='/' className='dropbtn'>
                            <a>Trailers</a>
                        </Link>
                        <div className='dropdownContent'>
                            <Link href='/trailers/bigMackLittleMack'>
                                <a>Big Mack & Little Mack</a>
                            </Link>
                            <Link href='/trailers/tinyMack'>
                                <a>Tiny Mack</a>
                            </Link>
                        </div>
                    </div>
                    <Link href='/rentals'>
                        <a>Rentals</a>
                    </Link>
                    <Link href='/contactUs'>
                        <a>Contact Us</a>
                    </Link>
                </section>
            </section>
            <style jsx>{`
                // Navbar container
                .nb {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    align-items: center;
                    background-color:rgb(0,0,0,0.2);
                }
                .img {
                    border: 1px solid blue;
                    width: auto;
                }
                .links {
                    border: 1px solid red;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    align-items: center;
                    width: 50%;
                }
                /* Links inside the navbar */
                .navbar a {
                    float: left;
                    font-size: 16px;
                    color: red;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                }
                
                /* The dropdown container */
                .dropdown {
                    float: left;
                    overflow: hidden;
                }
                
                /* Dropdown button */
                .dropdown .dropbtn {
                    font-size: 16px;
                    border: none;
                    outline: none;
                    color: white;
                    padding: 14px 16px;
                    background-color: inherit;
                    font-family: inherit; /* Important for vertical align on mobile phones */
                    margin: 0; /* Important for vertical align on mobile phones */
                }
                
                /* Add a red background color to navbar links on hover */
                .navbar a:hover, .dropdown:hover .dropbtn {
                    background-color: red;
                }
                
                /* Dropdown content (hidden by default) */
                .dropdownContent {
                    display: none;
                    position: absolute;
                    background-color: #f9f9f9;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                }
                
                /* Links inside the dropdown */
                .dropdownContent a {
                    float: none;
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                    text-align: left;
                }
                
                /* Add a grey background color to dropdown links on hover */
                .dropdownContent a:hover {
                    background-color: #ddd;
                }
                
                /* Show the dropdown menu on hover */
                .dropdown:hover .dropdownContent {
                    display: block;
                }
            `}</style>
        </div>
    )
}