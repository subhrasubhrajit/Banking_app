import React from 'react'
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";

const Navbar = () => {
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt="yoobank" className='w-[124px] h-[32px]' />
        </nav>
    )
}

export default Navbar
