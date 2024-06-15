import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='nav_image'>
                    <a href='/'>
                        <img src='/images/logo2.png' alt="" />
                    </a>
                </div>
                <div className='nav_links'>
                    <ul>
                        <li><a href='/'>HOME</a></li>
                        <li>
                            <a href='/aboutus'>ABOUT US</a>
                            {/* <ul className='nav_submenu'>
                                <li><a href='/aboutus'>OUR STORY</a></li>
                                <li><a href='/'>TEAM</a></li>
                            </ul> */}
                        </li>
                        <li><a href='/projects'>PROJECTS</a></li>
                        {/* <li><a href='/'>CAREERS</a></li> */}
                        <li><a href='/contactus'>CONTACT US</a></li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
