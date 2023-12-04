import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600'>
            <div>
                 <h1 className='w-full text-2xl font-bold text-[#000000]'>/Split<span className='text-[#FFB000]'>cost</span></h1>
                <p className='py-4'>Say goodbye to financial headaches and hello to a more organized, stress-free way of splitting expenses. SplitCost – where fairness meets simplicity!</p>
                
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Documentation</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer