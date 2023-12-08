import React from 'react'

export const EventForm = () => {
    return (
        <div>
            <div className='bg-[#ECECEC] flex flex-col justify-center items-center px-16 py-12 max-md:px-5'>

                {/* Block Form */}
                <div className='bg-white flex w-full max-w-[1168px] flex-col m-0.5 pr-0.5 py-12 rounded-[100px] items-start max-md:max-w-full'>
                    <div className='text-3xl font-bold whitespace-nowrap ml-16 max-md:max-w-full max-md:text-xl'>
                        Create New Event
                    </div>
                    <div className="bg-gray-200 self-stretch shrink-0 h-1 mt-8 max-md:max-w-full" />
                    <div className="self-center flex w-[964px] max-w-full flex-col items-stretch mt-16 mb-2.5 max-md:mt-10">

                        {/* **** Start - Form **** */}
                        <form action="">
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="event_name" className="block mb-2 text-sm font-medium text-gray-900 ">Event name</label>
                                    <input type="text" id="event_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="trip to Paradise" required />
                                </div>

                                <div>
                                    <label for="currency" className="block mb-2 text-sm font-medium text-gray-900 ">Choose currency</label>
                                    <select id="currency" className="mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                                        <option selected>Choose currency</option>
                                        <option value="MAD">Moroccan Dirham</option>
                                        <option value="US">United States dollar</option>
                                        <option value="EU">EURO</option>
                                    </select>
                                </div>


                                <div>
                                    <div className='font-semibold mb-3'>Participants</div>
                                    <div className='mb-3'>
                                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900">You</label>
                                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your name" required />
                                    </div>

                                    <div className='mb-3'>
                                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900">Person 2</label>
                                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required />
                                    </div>

                                    <div className='mb-3'>
                                        <button type="button" class="text-white bg-gray-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New Person +</button>
                                    </div>
                                    <button type="button" class="bg-[#00df9a] hover:bg-[#FFB000] w-[200px] rounded-3xl font-medium py-3 text-white transition duration-300 ease-in-out">Create Event</button>

                                </div>
                            </div>
                        </form>
                        {/* **** End - Form **** */}

                    </div>
                </div>

            </div>
        </div>
    )
}
