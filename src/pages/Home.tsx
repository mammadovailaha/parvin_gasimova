import React from 'react'
import Hero from '../components/HomeSections/Hero'
import ImagesSection from '../components/HomeSections/ImagesSection'
import Experience from '../components/Experience'
import ProtfolioSection from '../components/HomeSections/ProtfolioSection'
import NameSlide from '../components/HomeSections/NameSlide'

const Home: React.FC = () => {
  return (
    <div className='bg-white dark:bg-black overflow-x-hidden flex flex-col items-center'>
      <Hero />
      <ImagesSection/>
      <Experience/>
      <ProtfolioSection/>
      <NameSlide/>
    </div>
  )
}

export default Home
