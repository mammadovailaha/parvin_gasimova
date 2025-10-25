import React from 'react'
import Hero from '../components/HomeSections/Hero'
import ImagesSection from '../components/HomeSections/ImagesSection'
import PortfolioSection from '../components/HomeSections/ProtfolioSection'
import NameSlide from '../components/HomeSections/NameSlide'
import InfoSection from '../components/HomeSections/InfoSection'

const Home: React.FC = () => {

  return (
    <div className='bg-white dark:bg-black overflow-x-hidden flex flex-col items-center'>
      <Hero />
      <ImagesSection />
      <InfoSection />
      {/* Prop-ları sildin, komponenti düzəlt */}
      <PortfolioSection />
      <NameSlide />
    </div>
  )
}

export default Home
