import React from 'react'
import LandingNavbar from '../components/landing-navbar'
import Footer from '../components/landing-footer'

const Contact = () => {
  return (
    <div>
      <LandingNavbar />
      <div>
        <section class="bg-white ">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 ">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" class="space-y-8">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@splitcost.com" required />
              </div>
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required / >
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" class="py-3 px-5 text-sm bg-[#00df9a] hover:bg-[#FFB000] w-[150px] rounded-3xl font-medium text-white transition duration-300 ease-in-out">Send message</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Contact