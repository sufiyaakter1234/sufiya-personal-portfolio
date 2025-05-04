import React from 'react'
import HeroSection from './HeroSection'
import AboutUsPage from './AboutUsPage'
import Services from './Services'
import MyProjectSection from './MyProjectSection'
import Review from './Review'
import Contact from './Contact'

export const HomePage = () => {

  return (
    <div className='container m-auto'><HeroSection></HeroSection>
    <AboutUsPage></AboutUsPage>
    <Services></Services>
    <MyProjectSection></MyProjectSection>
    <Review></Review>
    <Contact></Contact></div>
  )
}
