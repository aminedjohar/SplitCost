import React from 'react'
import Handcount from '../assets/Handcount.png';
import tree from '../assets/Treemoney.png';
import bank from '../assets/bankmoney.png';


const LandingSection = () => {
    return (<>
        <div className='w-full bg-[#00df9a] text-black py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <p className=' font-bold text-white'>INTELLIGENT EXPENSE SPLITTING</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Fairness, Every Time</h1>
                    <p>
                        Even without a login, experience the power of intelligent expense splitting.
                        Our advanced algorithms ensure fairness in dividing costs, considering factors
                        like itemized bills and individual contributions.
                        Let technology do the work, and enjoy a seamless bill-splitting experience.
                    </p>
                    <button className='bg-[#FFB000] text-white w-[200px] rounded-3xl font-medium my-6 mx-auto md:mx-0 py-3 transition duration-300 ease-in-out hover:bg-[#fdde5f]'>
                        Learn more
                    </button>
                </div>
                <img className='w-[500px] mx-auto my-4' src={Handcount} alt='tsi' />
            </div>
        </div>

        <div className='w-full text-black py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={tree} alt='tsi' />
                <div className='flex flex-col justify-center'>
                    <p className='font-bold text-[#FFB000]'> INSTANT CALCULATION, NO STRINGS ATTACHED</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Hassle-Free Bill-Splitting</h1>
                    <p>
                        Say goodbye to the cumbersome process of logging in or registering just to split a bill.
                        With our user-friendly interface, you can instantly calculate expenses without
                        the need for tedious sign-ups.
                    </p>
                    <button className='bg-[#FFB000] text-white w-[200px] rounded-3xl font-medium my-6 mx-auto md:mx-0 py-3 transition duration-300 ease-in-out hover:bg-[#fdde5f]'>
                        Learn more
                    </button>
                </div>
            </div>
        </div>

        <div className='w-full bg-[#ffdd92] text-black py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <p className='text-white font-bold '> NO LOGIN OR REGISTER REQUIRED</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Get Started in Seconds</h1>
                    <p>
                        We believe in simplicity. That's why SplitCost lets you dive straight into bill-splitting without
                        the hassle of creating an account. Enjoy the convenience of instant calculations
                        without compromising your privacy.
                    </p>
                    <button className='bg-[#00df9a] text-white w-[200px] rounded-3xl font-medium my-6 mx-auto md:mx-0 py-3 transition duration-300 ease-in-out hover:bg-[#FFB000]'>
                        Learn more
                    </button>
                </div>
                <img className='w-[500px] mx-auto my-4' src={bank} alt='tsi' />
            </div>
        </div>
    </>
    )
}

export default LandingSection