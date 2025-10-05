import React from 'react'
import Hero from '../components/HomeSections/Hero'
import ImagesSection from '../components/HomeSections/ImagesSection'
// import Experience from '../components/Experience'
import ProtfolioSection from '../components/HomeSections/ProtfolioSection'
import NameSlide from '../components/HomeSections/NameSlide'
import {portfolioData} from "../data/portfolioData"
import InfoSection from '../components/HomeSections/InfoSection'

const Home: React.FC = () => {
  console.log(portfolioData);

  return (
    <div className='bg-white dark:bg-black overflow-x-hidden flex flex-col items-center'>
      <Hero />
      <ImagesSection/>
      {/* <Experience/> */}
      <InfoSection/>
      <ProtfolioSection serviceName={''} serviceImage={''} serviceId={0} workId={0}/>
      <NameSlide/>
    </div>
  )
}

export default Home
