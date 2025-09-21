import React from 'react'
// data/portfolioData.ts
import img1 from "../../assets/images/POSTLAR/23 ECONOM suv/toyota.png";
import img2 from "../../assets/images/POSTLAR/MERCEDES/21/MERCEDES COVER.png";
import img3 from "../../assets/images/POSTLAR/mckp1.png";
import img4 from "../../assets/images/POSTLAR/13/byd.png";
import img5 from "../../assets/images/POSTLAR/MCKP2.png";
import img6 from "../../assets/images/POSTLAR/25/leopard 8.png";
import img7 from "../../assets/images/POSTLAR/muqayise.png";
import img8 from "../../assets/images/POSTLAR/offroad/11/haval.png";
import img9 from "../../assets/images/POSTLAR/premium/21/TESLA.png";
import img10 from "../../assets/images/POSTLAR/BYDD/22/byd cover.png";
import img11 from "../../assets/images/POSTLAR/4.png";
import img12 from "../../assets/images/POSTLAR/offroad/11/jetour.png";
import ProtfolioCard from '../ProtfolioCard';
import MainButton from '../MainButton';
import { useNavigate } from 'react-router-dom';




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

const PortfolioSection = () => {
    const portfolio = portfolioData.slice(0, 4)
    const navigate=useNavigate();
   const handleClick=()=>{
navigate("/Portfolio");
   }
  return (
<div className='w-full flex flex-col items-center gap-10 py-10' >
    <h2 className='text-6xl font-bold text-black '>worksss</h2>
    <div className=' w-full flex flex-wrap justify-center gap-10'>
        {portfolio.map((item, idx) => (
        <ProtfolioCard
          key={idx}
          serviceName={item.serviceName}
          serviceImage={item.serviceImage}
          company={item.company}
        />
      ))}
      </div>
<MainButton text='Daha çox' onClick={handleClick} />
</div>
      
  )
}

export default PortfolioSection


