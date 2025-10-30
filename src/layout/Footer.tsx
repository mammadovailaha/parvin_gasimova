import React from 'react'
import { FaBehance, FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandLinkedin } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import emoji from "../assets/images/STK-20251007-WA0006.webp"

const sosialLinks = [
  { id: 1, icon: <FaInstagram  className='text-base md:text-xl'/>, link: "https://www.instagram.com/" },
  { id: 2, icon: <TbBrandLinkedin  className='text-base md:text-xl'/>, link: "https://www.linkedin.com/in/parvin-gasimova-298784318/?locale=ru_RU" },
  { id: 3, icon: <FaBehance  className='text-base md:text-xl'/>, link: "https://www.behance.net/parvingasimova" },
  { id: 4, icon: <FaWhatsapp  className='text-base md:text-xl'/>, link: "https://wa.me/994505547568" },
]

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[350px] flex justify-center items-center bg-black">
      <div className='w-[90%] h-[90%] rounded-lg flex flex-col justify-center items-center gap-5'>
        <div className='w-full h-[80%] flex flex-col md:flex-row justify-start md:justify-between items-center text-white border-b border-gray-500/40 gap-7'>
          <h1 className='text-xl md:text-3xl lg:text-5xl font-poppins font-semibold text-white mt-4'>
            Brendləri <span className='text-2xl md:text-3xl lg:text-5xl text-gray-400 font-poppins font-semibold'> dizayn</span> vasitəsilə gücləndiririk
          </h1>
          <div className='flex gap-2 md:gap-5 justify-end items-center w-full'>
            {sosialLinks.map(link => (
              <Link
                target="_blank"
                key={link.id}
                className='w-8 md:w-10 h-8 md:h-10 border border-gray-300/60 rounded-full flex justify-center items-center hover:bg-white hover:border-white transition-all ease-in-out delay-200 text-white hover:text-black text-xl' 
                to={link.link}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className='w-full flex justify-around text-white pt-5'>
          {/* Glass Effect ilə Şəkil */}
          <div className='relative w-20 md:w-40 w-20 md:h-40 group'>
            {/* Glass Container */}
            <div className='absolute inset-0 backdrop-blur-md bg-white/10 rounded-full border border-white/20 shadow-xl group-hover:bg-white/15 transition-all duration-300'></div>
            
            {/* Glow Effect */}
            <div className='absolute inset-0 bg-[#aeff00]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            {/* Image */}
            <div className='relative w-full h-full p-3 flex justify-center items-center'>
              <img 
                src={emoji} 
                alt="Parvin Gasimova" 
                className='w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2.5'>
            <h2 className='text-base md:text-xl lg:text-3xl text-white font-poppins font-semibold'>Ünvan</h2>
            <span className='text-xs md:text-lg lg:text-xl text-gray-400 font-poppins font-normal'>Azərbaycan, Bakı</span>
          </div>
          
          <div className='flex flex-col gap-2.5'>
            <h2 className='text-base md:text-xl lg:text-3xl text-white font-poppins font-semibold'>Əlaqə</h2>
            <p className='text-xs md:text-lg lg:text-xl text-gray-400 font-poppins font-normal'>+994 50 554 75 68</p>
            <p className='text-xs md:text-lg lg:text-xl text-gray-400 font-poppins font-normal'>parvin.gasimova@inbox.ru</p>
          </div>
        </div>
        
        <div><p className='text-gray-400 font-poppins font-normal'>© 2025 Parvin Gasimova</p></div>
      </div>
    </div>
  )
}

export default Footer