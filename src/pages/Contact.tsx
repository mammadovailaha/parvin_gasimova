import ContactForm from "../components/ContactForm"
import { FaBehance, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { TbBrandLinkedin } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import emoji from "../assets/images/woman-technologist-light-skin-tone_1f469-1f3fb-200d-1f4bb.png"

const sosialLinks = [
  {id:1, icon:<FaInstagram/>, link:"https://www.instagram.com/", label:"Instagram"},
  {id:2, icon:<TbBrandLinkedin/>, link:"https://www.linkedin.com/in/parvin-gasimova-298784318/?locale=ru_RU", label:"LinkedIn"},
  {id:3, icon:<FaBehance/>, link:"https://www.behance.net/parvingasimova", label:"Behance"},
  {id:4, icon:<FaWhatsapp />, link:"https://wa.me/994505547568", label:"WhatsApp"},
]

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 mt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#aeff00] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-90 bg-gray-400 rounded-full opacity-5 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Form Section - Glass Morphism */}
      <div className="w-full md:w-[80%] lg:w-[45%] z-10 animate-fadeInLeft">
        <div className="relative backdrop-blur-md bg-white/80 rounded-3xl shadow-2xl p-8 border border-gray-200/50 hover:shadow-[0_20px_60px_rgba(174,255,0,0.15)] transition-all duration-500 group">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#aeff00] to-transparent rounded-full"></div>
          
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
              Gəlin Danışaq
            </h2>
            <p className="text-gray-500 text-sm italic">
              "Hər böyük layihə kiçik bir mesajla başlayır..."
            </p>
          </div>
          
          <ContactForm/>
          
          {/* Bottom Decorative Element */}
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-2 h-2 bg-[#aeff00] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2 h-2 bg-[#aeff00] rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="flex flex-col justify-center items-start gap-6 z-10 animate-fadeInUp">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Sosial Media</h3>
          <div className="w-20 h-1 bg-[#aeff00] rounded-full"></div>
        </div>
        
        {sosialLinks.map((link, index) => (
          <Link 
            className="group relative flex items-center gap-4 text-lg font-medium text-gray-700 
                       hover:text-gray-900 transform hover:translate-x-3 transition-all duration-300
                       animate-slideIn"
            style={{ animationDelay: `${index * 0.1}s` }}
            key={link.id} 
            to={link.link} 
            target="_blank"
          >
            {/* Icon Container */}
            <div className="relative">
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-md 
                            group-hover:shadow-lg group-hover:bg-[#aeff00] transition-all duration-300
                            border border-gray-200 group-hover:border-[#aeff00]">
                <span className="text-2xl text-gray-700 group-hover:text-gray-900 transition-colors">
                  {link.icon}
                </span>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#aeff00] rounded-xl blur-xl opacity-0 
                            group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </div>
            
            {/* Label */}
            <span className="font-semibold">{link.label}</span>
            
            {/* Arrow */}
            <svg 
              className="w-5 h-5 text-gray-400 group-hover:text-[#aeff00] transform 
                       group-hover:translate-x-1 transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      {/* Emoji Section - Floating Animation */}
      <div className="w-64 h-64 lg:w-80 lg:h-80 flex justify-center items-center z-10 animate-fadeInRight">
        <div className="relative group">
          {/* Rotating Ring */}
          <div className="absolute inset-0 border-4 border-dashed border-[#aeff00]/30 rounded-full animate-spinSlow"></div>
          
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#aeff00]/20 to-transparent rounded-full blur-2xl 
                        group-hover:from-[#aeff00]/30 transition-all duration-500"></div>
          
          {/* Image */}
          <img 
            src={emoji} 
            alt="Emoji" 
            className="relative w-64 h-full object-cover rounded-full shadow-2xl 
                     transform group-hover:scale-105 transition-all duration-500 cursor-pointer
                     border-8 border-white animate-float" 
          />
          
          {/* Decorative Dots */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#aeff00] rounded-full animate-ping"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact;