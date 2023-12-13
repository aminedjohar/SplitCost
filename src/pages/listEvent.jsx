import React from 'react'
import Footer from '../components/landing-footer'
import Navbar from '../components/Navbar'
import { EventDetails } from '../components/EventDetails'

const ListEvent = () => {
  return (
    <div>
      <Navbar />
      <EventDetails />
      <Footer />
    </div>
  )
}

export default ListEvent