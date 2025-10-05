import karibu from "../../assets/images/karibu.png"
import relax from "../../assets/images/relax.png"
import kelbecer from "../../assets/images/kelbecer.png"
import mv from "../../assets/images/mv.png"
import giftshop from "../../assets/images/giftshop.png"
import saatstore from "../../assets/images/saat store.png"
import esederek from "../../assets/images/esederek.png"
import tripsee from "../../assets/images/tripsee.png"
import sananAgazade from "../../assets/images/sanan asadzade.png"
import CollaborationCard from "./CollaborationCard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const collaborationLogos = [
    tripsee,
    kelbecer,
    saatstore,
    sananAgazade,
    relax,
    karibu,
    esederek,
    mv,
    giftshop,   
]

const Collaboration = () => {
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <div className="w-full flex flex-col gap-3 md:gap-5 items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1e1e1e]">Əməkdaşlar</h2>
      <Slider {...settings} className="w-[90%] flex justify-center items-center md:gap-10">
        {collaborationLogos.map((logo, index) => (
          <CollaborationCard key={index} img={logo} />
        ))}
      </Slider>
    </div>
  )
}

export default Collaboration
