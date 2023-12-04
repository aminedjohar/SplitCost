import React from 'react'
import LandingNavbar from '../components/landing-navbar'
import LandingHero from '../components/landing-hero'
import LandingSection from '../components/landing-section'
import Newsletter from '../components/landing-newsletter'
import Footer from '../components/landing-footer'

export default function LandingPage() {
  return (
    <div className='h-full '>
        <LandingNavbar />
        <LandingHero />
        <LandingSection />
        <Newsletter />
        <Footer />
    </div>
  )
}
