import React from 'react'

export default function LandingHero() {
    return (
        <div className='flex justify-center max-w-screen-xl mx-auto'>
            <div className='p-40'>
                <div className='text-6xl text-center font-bold '>Easy <span className='text-amber-300'>splitting</span><br /> of group <span className='text-red-600	'>expenses</span></div>
                <div className='text-1xl text-center font-semibold mt-6'>The simplest way to calculate who owes what.</div>
                <img
                    src="/public/heroimg.png"
                    className=''
                    alt="Hero Image"
                    // style="margin-top: -20px;"
                />
            </div>
        </div>
    )
}
