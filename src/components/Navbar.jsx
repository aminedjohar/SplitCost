import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Outlet, Link } from "react-router-dom";


export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };



    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-2xl font-bold text-[#000000]'>/Split<span className='text-[#FFB000]'>cost</span></h1>
            <ul className='hidden md:flex font-semibold'>
                <Link to="/"><li className='p-4'>Home</li></Link>
                <Link to="/faq"><li className='p-4'>FAQ</li></Link>
                <Link to="/example"><li className='p-4'>Example</li></Link>
                <Link to="/about"><li className='p-4'>About</li></Link>
                <Link to="/contact"><li className='p-4'>Contact</li></Link>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-xl font-bold text-[#000000] m-3'>/Split<span className='text-[#00df9a]'>cost</span></h1>
                <Link to="/"><li className='p-4 border-b border-gray-600 font-semibold'>Home</li></Link>
                <Link to="/faq"><li className='p-4 border-b border-gray-600 font-semibold'>FAQ</li></Link>
                <Link to="/example"><li className='p-4 border-b border-gray-600 font-semibold'>Example</li></Link>
                <Link to="/about"><li className='p-4 border-b border-gray-600 font-semibold'>About</li></Link>
                <Link to="/contact"><li className='p-4 font-semibold'>Contact</li></Link>
            </ul>
            <Outlet />
        </div>
    );
};
