import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function LandingNavbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-2xl font-bold text-[#000000]'>/Split<span className='text-[#FFB000]'>cost</span></h1>
            <ul className='hidden md:flex font-semibold'>
                <li className='p-4'>Home</li>
                <li className='p-4'>FAQ</li>
                <li className='p-4'>Example</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
                <li className='px-2 pt-2'>
                    <button className='bg-[#00df9a] hover:bg-[#FFB000] w-[100px] rounded-3xl font-medium py-3 text-white transition duration-300 ease-in-out'>
                        Start
                    </button>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-xl font-bold text-[#000000] m-3'>/Split<span className='text-[#00df9a]'>cost</span></h1>
                <li className='p-4 border-b border-gray-600 font-semibold'>Home</li>
                <li className='p-4 border-b border-gray-600 font-semibold'>FAQ</li>
                <li className='p-4 border-b border-gray-600 font-semibold'>Example</li>
                <li className='p-4 border-b border-gray-600 font-semibold'>About</li>
                <li className='p-4 font-semibold'>Contact</li>
            </ul>
        </div>
    );
};
