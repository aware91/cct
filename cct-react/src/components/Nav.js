import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import '../styles/nav.css'

export const Nav = () => {
    return (
        <section className='top'>
            <div>
                <img src={logo} alt='Center Creek Teardrops logo' width={75} height={75}  />
            </div>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/ourstory'>Our Story</Link>
                <Link to='/trailers'>Trailer ▼</Link>
                <Link to='/rental'>Rentals</Link>
                <Link to='/contactus'>Contact Us</Link>
            </div>
        </section>
    )
}