import React from 'react'
import LandingNavbar from '../components/landing-navbar'
import Footer from '../components/landing-footer'

const Example = () => {
  return (
    <div>
      <LandingNavbar />
      <div>
        <div className='bg-[#ECECEC] flex flex-col justify-center items-center px-16 py-12 max-md:px-5'>

          {/* Block Form */}
          <div className='bg-white flex w-full max-w-[1168px] flex-col m-0.5 pr-0.5 py-12 rounded-[100px] items-start max-md:max-w-full'>
            <div className='text-3xl font-bold whitespace-nowrap ml-16 max-md:max-w-full max-md:text-xl'>
              Event Example
            </div>
            <div className='className="font-normal mt-4 px-20'><b>Participants: </b>Ahmad . Sara . Alex</div>
            <div className="bg-gray-200 self-stretch shrink-0 h-1 mt-8 max-md:max-w-full" />
            <div className="self-center flex w-[964px] max-w-full flex-col items-stretch mt-16 mb-2.5 max-md:mt-10">

              {/* **** Start - Form **** */}
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="event_name" className="block mb-2 text-sm font-medium text-gray-900 ">Event Name</label>
                    <input
                      type="text"
                      id="event_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Effectué le paiement du loyer"
                      disabled
                    />
                  </div>

                  <div>
                    <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 ">Amount</label>
                    <input
                      type="text"
                      id="event_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="1000 DH"
                      disabled
                    />
                  </div>

                  <div className="mb-3">
                    <div className="font-semibold mb-3">Payment Details</div>
                    <div className="font-normal mb-4">Alex → Ahmad : 333.3 DH</div>
                    <div className="font-normal mb-4">Sara → Ahmad : 333.3 DH</div>

                    <button
                      type="button"
                      className="bg-[#00df9a] hover:bg-[#FFB000] w-[200px] rounded-3xl font-medium py-3 text-white transition duration-300 ease-in-out"
                      disabled
                    >
                      Copy URL
                    </button>
                  </div>
                </div>
              </form>
              {/* **** End - Form **** */}

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Example