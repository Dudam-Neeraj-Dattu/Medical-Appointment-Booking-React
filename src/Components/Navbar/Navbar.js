import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import icon from '../assests/images/Stethoscope.png'
import { useEffect } from 'react'
// import Landing_Page from '../Landing_Page/Landing_Page'

const Navbar = () => {

    function handleClick() {

    }

    return (
        <div className='navbar'>
            <div className="nav__logo">
                <h1>Stay Healthy <img src={icon} alt="" /></h1>
            </div>
            <div className="nav__links">
                <div className="home link">
                    <a href="/Home">Home</a>
                </div>
                <div className="appointment link">
                    <a href="/">Appointments</a>
                </div>
                <div className="blog link">
                    <a href="/">Health Blog</a>
                </div>
                <div className="review link">
                    <a href="/">Reviews</a>
                </div>
                <div className="sign_up link">
                    <a href="/Sign_Up">
                        <button className="nav-btn1">Sign Up</button>
                    </a>
                </div>
                <div className="login link">
                    <a href="/Login">
                        <button className="nav-btn1">Login</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;