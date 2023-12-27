import React from 'react'
import Footer from '../components/landing-footer'
import Navbar from '../components/Navbar'
import { EventForm } from '../components/EventForm'

const NewEvent = () => {
  return (
    <div>
      <Navbar />
      <EventForm />
      <Footer />
    </div>
  )
}

export default NewEvent