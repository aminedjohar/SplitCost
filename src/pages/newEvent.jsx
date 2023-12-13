import React from 'react'
import Footer from '../components/landing-footer'
import Navbar from '../components/Navbar'
import { EventForm } from '../components/EventForm'
import ListEvent from './listEvent'
import { EventDetails } from '../components/EventDetails'

const NewEvent = () => {
  return (
    <div>
      <Navbar />
      <EventForm />
      <EventDetails />
      <Footer />
    </div>
  )
}

export default NewEvent