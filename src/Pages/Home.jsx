import HeroSection from '../Components/Hero'
import ProcessSection from '../Components/ProcessSection'
import React from 'react'
import Testimonials from '../Components/Testimonials'
import WelcomeSection from '../Components/WelcomePage'
import WorkProcessSection from '../Components/ServicesOffered'

const Home = () => {
  return (
   <>
   <HeroSection/>
   <WelcomeSection/>
   <WorkProcessSection/>
   <ProcessSection/>
   {/* <Testimonials/> */}
   </>
  )
}

export default Home;