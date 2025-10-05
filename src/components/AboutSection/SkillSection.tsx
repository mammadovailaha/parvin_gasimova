import { HiOutlineLightBulb } from "react-icons/hi"
import capcut from "../../assets/logo/capcutLogo.svg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import skilpng1 from "../../assets/logo/pngwing.com (1).png"
import skilpng2 from "../../assets/logo/pngwing.com - 2024-10-09T223847.471.png"
import skilpng3 from "../../assets/logo/pngwing.com - 2024-10-09T223858.431.png"
import skilpng4 from "../../assets/logo/pngwing.com - 2024-10-09T223908.067.png"
import skilpng5 from "../../assets/logo/pngwing.com - 2024-10-09T223918.000.png"
import skilpng6 from "../../assets/logo/pngwing.com.png"

const skillLogos = [
       {icon: <img src={skilpng1} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng2} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng3} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng4} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng5} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng6} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={capcut} alt="CapCut Logo" className="w-12 md:w-20 h-12 md:h-20" />},
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
                <h2 className="text-2xl md:text-4xl font-bold text-[#1e1e1e]">Yaradıcılıq Bacarıqları</h2></div>
            <Slider {...settings} className="w-[90%] flex justify-center items-center md:gap-10">
                {skillLogos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center gap-2 mb-8 relative">
                        <div className="group">{logo.icon}</div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SkillSection
