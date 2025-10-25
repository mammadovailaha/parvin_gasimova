
import heroBg1 from "../../assets/images/hero-bg-1.svg"
import heroBg2 from "../../assets/images/hero-bg-2.svg"
import type { FC } from 'react'
import TypingText from "../TypingText"
import ServicesSlider from "../SliderComponent"
import { useNavigate } from "react-router-dom"
const services = [
  "Brendinq",
  "Sosial media dizaynı", 
  "Çap məhsulları dizaynı",
  "Loqo dizaynı",
  "Reklam materiallarının dizaynı",
  "Paketləmə dizaynı",
  "Motion dizaynı",

]

const Hero:FC = () => {
  const navigate=useNavigate();
  return (
    <div className='w-full h-[250px] md:h-screen flex flex-col justify-center items-center relative overflow-hidden gap-10 animate-fade-in-up'>
         <style>
        {`
          @keyframes float {
            0% { transform: translateX(0px); }
            50% { transform: translateX(-50px); }
            100% { transform: translateX(0px); }
          }
          .float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
      <div className="w-full h-[50%] absolute top-0 left-0 z-0 float"><img className="object-cover w-full h-full" src={heroBg2} alt="" /></div>
      <div className="w-full h-[50%] absolute bottom-0 left-0 z-0 float"><img className="object-cover w-full h-full" src={heroBg1} alt="" /></div>
     <TypingText text="Qrafik & Motion dizayner" className="font-poppins font-semibold text-3xl md:text-6xl text-black z-40 relative bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent inline-block" />
    <ServicesSlider onClick={()=>{navigate("/portfolio")}} className="bg-[#f8f8f8]" textStyle="text-lg font-poppins font-regular text-black dark:text-white" data={services} />
    </div>
  )
}

export default Hero
