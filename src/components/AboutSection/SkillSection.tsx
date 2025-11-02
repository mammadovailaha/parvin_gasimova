import { HiOutlineLightBulb } from "react-icons/hi"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import skilpng1 from "../../assets/logo/pngwing.com (1).png"
import skilpng2 from "../../assets/logo/pngwing.com - 2024-10-09T223847.471.png"
import skilpng3 from "../../assets/logo/pngwing.com - 2024-10-09T223858.431.png"
import skilpng4 from "../../assets/logo/pngwing.com - 2024-10-09T223908.067.png"
import skilpng5 from "../../assets/logo/pngwing.com - 2024-10-09T223918.000.png"
import skilpng6 from "../../assets/logo/pngwing.com.png"
import skilpng7 from "../../assets/logo/vecteezy_capcut-transparent-icon_48759325 (1).png"

const skillLogos = [
       {icon: <img src={skilpng1} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng2} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng3} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng4} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng5} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng6} alt="Skill Logo" className="w-12 md:w-20 h-12 md:h-20" />},
       {icon: <img src={skilpng7} alt="CapCut Logo" className="w-12 md:w-20 h-12 md:h-20" />},
]

const SkillSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300,

        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="w-full flex flex-col gap-8 md:gap-16 items-center mt-5">
            <div className="flex items-center gap-2 w-full justify-center"><HiOutlineLightBulb className="text-4xl text-[#1e1e1e]" />
                <h2 className="text-xl md:text-3xl font-poppins font-semibold text-[#1e1e1e]">Yaradıcılıq Bacarıqları</h2></div>
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
