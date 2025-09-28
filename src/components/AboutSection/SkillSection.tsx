import { HiOutlineLightBulb } from "react-icons/hi"
import capcut from "../../assets/logo/capcutLogo.svg"
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const skillLogos = [
       {icon: <SiAdobephotoshop className="text-8xl text-[#1e1e1e]" />, label: "Adobe Photoshop"},
       {icon: <SiAdobeillustrator className="text-8xl text-[#1e1e1e]" />, label: "Adobe Illustrator"},
       {icon: <SiAdobepremierepro className="text-8xl text-[#1e1e1e]" />, label: "Adobe Premiere Pro"},
       {icon: <SiAdobeaftereffects className="text-8xl text-[#1e1e1e]" />, label: "Adobe After Effects"},
       {icon: <SiAdobeindesign className="text-8xl text-[#1e1e1e]" />, label: "Adobe InDesign"},
       {icon: <img src={capcut} alt="CapCut Logo" className="w-24 h-23.5" />, label: "CapCut"}
]

const SkillSection = () => {
    const settings = {
        dots: true,          // alt nöqtələr
        infinite: true,      // limitsiz dövr etsin
        speed: 500,          // keçid sürəti (ms)
        slidesToShow: 5,     // eyni anda neçə element göstərsin
        slidesToScroll: 1,   // hər dəfə neçə element sürüşsün
        autoplay: true,      // avtomatik sürüşsün
        autoplaySpeed: 2000, // avtomatik keçid sürəti

        responsive: [
            {
                breakpoint: 768, // ekran <= 760px (planşet və kiçik laptop)
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 640, // ekran <= 640px (telefon)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="w-full flex flex-col gap-8 md:gap-16 items-center">
            <div className="flex items-center gap-2 w-full justify-center"><HiOutlineLightBulb className="text-4xl text-[#1e1e1e]" />
                <h2 className="text-4xl font-bold text-[#1e1e1e]">Yaradıcılıq Bacarıqları</h2></div>
            <Slider {...settings} className="w-[90%] flex justify-center items-center md:gap-10">
                {skillLogos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center gap-2 mb-8 relative">
                        <div className="group">{logo.icon} <p className="text-base font-semibold hidden group-hover:block absolute z-10 bg-gray-200 rounded-lg px-6 top-[-80px]">{logo.label}</p></div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SkillSection
