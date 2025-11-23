import { useEffect, useState,useRef  } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay
 useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % collaborationLogos.length);
    }, 1300);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  // const handlePrev = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? collaborationLogos.length - 1 : prev - 1
  //   );
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prev) => (prev + 1) % collaborationLogos.length);
  // };

  const getVisibleLogos = () => {
    const logos = [];
    for (let i = 0; i < visibleItems; i++) {
      logos.push(
        collaborationLogos[(currentIndex + i) % collaborationLogos.length]
      );
    }
    return logos;
  };

  return (
    <div className="w-full py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">
        İndiyədək edilən əməkdaşlıqlar
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Slider */}
        <div className="overflow-hidden">
          <div className="flex justify-center items-center gap-6 transition-all duration-500">
            {getVisibleLogos().map((logo, index) => (
              <div
                key={index}
                className="transition-all duration-1500"
              >
                <CollaborationCard img={logo} />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        {/* <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 z-10"
        >
          ❮
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 z-10"
        >
          ❯
        </button> */}

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {collaborationLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#aeff00] w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaboration;