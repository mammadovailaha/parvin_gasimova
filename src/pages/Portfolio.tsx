import React from 'react'
// data/portfolioData.ts
import img1 from "../assets/images/POSTLAR/23 ECONOM suv/toyota.png";
import img2 from "../assets/images/POSTLAR/MERCEDES/21/MERCEDES COVER.png";
import img3 from "../assets/images/POSTLAR/mckp1.png";
import img4 from "../assets/images/POSTLAR/13/byd.png";
import img5 from "../assets/images/POSTLAR/MCKP2.png";
import img6 from "../assets/images/POSTLAR/25/leopard 8.png";
import img7 from "../assets/images/POSTLAR/muqayise.png";
import img8 from "../assets/images/POSTLAR/offroad/11/haval.png";
import img9 from "../assets/images/POSTLAR/premium/21/TESLA.png";
import img10 from "../assets/images/POSTLAR/BYDD/22/byd cover.png";
import img11 from "../assets/images/POSTLAR/4.png";
import img12 from "../assets/images/POSTLAR/offroad/11/jetour.png";
import ProtfolioCard from '../components/ProtfolioCard';

// eslint-disable-next-line react-refresh/only-export-components
export const portfolioData = [
  { serviceName: "Toyota SUV", serviceImage: img1, company: "Toyota" },
  { serviceName: "Mercedes Cover", serviceImage: img2, company: "Mercedes" },
  { serviceName: "Mockup Design 1", serviceImage: img3, company: "Concept" },
  { serviceName: "BYD EV", serviceImage: img4, company: "BYD" },
  { serviceName: "Mockup Design 2", serviceImage: img5, company: "Concept" },
  { serviceName: "Leopard 8", serviceImage: img6, company: "Leopard" },
  { serviceName: "Müqayisə", serviceImage: img7, company: "Analysis" },
  { serviceName: "Haval Offroad", serviceImage: img8, company: "Haval" },
  { serviceName: "Tesla Premium", serviceImage: img9, company: "Tesla" },
  { serviceName: "BYD Cover", serviceImage: img10, company: "BYD" },
  { serviceName: "Project 4", serviceImage: img11, company: "General" },
  { serviceName: "Jetour SUV", serviceImage: img12, company: "Jetour" },
];

const Portfolio = () => {
  return (
    <div className='w-full flex flex-col items-center gap-6 md:gap-10 my-6 md:my-10 overflow-hidden py-18 md:pt-24'>
      <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white">Featured work</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        {portfolioData.map((item, idx) => (
        <ProtfolioCard
          key={idx}
          serviceName={item.serviceName}
          serviceImage={item.serviceImage}
          company={item.company}
        />
      ))}
      </div>
    </div>
  )
}

export default Portfolio