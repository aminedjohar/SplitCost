import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-router-dom";



const LandingHero = () => {
  return (
    <div>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#FFB000] font-bold p-2'>
          SPLIT EXPENSES CALCULATOR
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>
          Easy splitting
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            expenses for
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Groups', 'Roommates', 'Friends', 'Colleagues']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-semibold text-gray-500'>The simplest way to calculate who owes what.</p>
        <Link to="/new"><button className='bg-[#00df9a] hover:bg-[#FFB000] w-[200px] rounded-3xl font-medium my-6 mx-auto py-3 text-white transition duration-300 ease-in-out'>
          Get Started
        </button></Link>
      </div>
    </div>
  );
};

export default LandingHero;