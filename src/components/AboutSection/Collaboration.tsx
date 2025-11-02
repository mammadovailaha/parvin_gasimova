import karibu from "../../assets/images/karibu.png";
import relax from "../../assets/images/relax.png";
import kelbecer from "../../assets/images/kelbecer.png";
import mv from "../../assets/images/mv.png";
import giftshop from "../../assets/images/giftshop.png";
import saatstore from "../../assets/images/saat store.png";
import esederek from "../../assets/images/esederek.png";
import tripsee from "../../assets/images/tripsee.png";
import sananAgazade from "../../assets/images/sanan asadzade.png";
import CollaborationCard from "./CollaborationCard";
import Slider from "react-slick";
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
];

const Collaboration = () => {
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1300,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, 
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  return (
    <div className="w-full flex flex-col gap-3 md:gap-5 items-center">
      <h2 className="text-xl md:text-3xl font-poppins font-semibold text-[#1e1e1e]">
        İndiyədək edilən əməkdaşlıqlar
      </h2>
      <Slider
        {...settings}
        className="w-[90%] flex justify-center items-center gap-5 md:gap-10"
      >
        {collaborationLogos.map((logo, index) => (
          <div className="" key={index}>
            <div className="w-[140px] md:w-[180px] h-[100px] md:h-[120px] flex justify-center items-center rounded-lg p-3 transition-shadow duration-300">
              <img
                src={logo}
                alt="Əməkdaş"
                className="w-full h-full object-cover lg:filter lg:grayscale lg:hover:grayscale-0 transition-all duration-300 px-2"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Collaboration;
