import React from 'react';

export const EventDetails = () => {



    return (
        <div>
            <div className='bg-[#ECECEC] flex flex-col justify-center items-center px-16 py-12 max-md:px-5'>

                {/* Block Form */}
                <div className='bg-white flex w-full max-w-[1168px] flex-col m-0.5 pr-0.5 py-12 rounded-[100px] items-start max-md:max-w-full'>
                    <div className='text-3xl font-bold whitespace-nowrap ml-16 max-md:max-w-full max-md:text-xl'>
                        "Event name"
                    </div>
                    <div className='text-xl ml-16 mt-3 max-md:max-w-full max-md:text-xl'>
                        <span className='font-semibold'>Participants:</span>    Amine . Hamza . Reda . Yassine
                    </div>

                    <div className="bg-gray-200 self-stretch shrink-0 h-1 mt-8 max-md:max-w-full" />

                    
                    <div className="self-center flex w-[964px] max-w-full flex-col items-stretch mt-16 mb-2.5 max-md:mt-10">
                        <div className=''>
                            <button className='bg-[#FFB000] hover:bg-[#00df9a] w-[200px] rounded-3xl font-medium py-3 text-white transition duration-300 ease-in-out'>
                                Add payment
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
