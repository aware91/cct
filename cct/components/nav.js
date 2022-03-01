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
                        <Link href='/trailers' className='dropbtn'>
                            <a>Trailers ▼</a>
                        </Link>
                        <div className='dropdownContent'>
                            <Link href='/trailers/bLMack'>
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
                    position: fixed; 
                    top: 0;
                    width: 100%;
                }
                .img {
                    width: auto;
                }
                .links {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    align-items: center;
                    width: 50%;
                    margin-right: 10px
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
                a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.15rem;
                    text-shadow: 
                        2px 0px 0px black,
                        -2px 0px 0px black,
                        0px 2px 0px black, 
                        0px -2px 0px black;
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
                
                /* Dropdown content (hidden by default) */
                .dropdownContent {
                    display: none;
                    position: absolute;
                    min-width: 160px;
                    z-index: 1;
                }
                
                /* Links inside the dropdown */
                .dropdownContent a {
                    float: none;
                    color: black;
                    padding: 12px 0;
                    text-decoration: none;
                    display: block;
                    text-align: left;
                    color: white;
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