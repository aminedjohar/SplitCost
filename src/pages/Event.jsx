import React from 'react'
import Footer from '../components/landing-footer'
import Navbar from '../components/Navbar'
import { EventDetails } from '../components/EventDetails'

const Event = () => {
  return (
    <div>
      <Navbar />
      <EventDetails />
      <Footer />
    </div>
  )
}

export default Event