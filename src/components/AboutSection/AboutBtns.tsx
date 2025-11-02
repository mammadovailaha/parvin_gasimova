import { useRef, useEffect, useState } from "react";
import { HiPencil } from "react-icons/hi";
import whatsapp from '../../assets/logo/whatsapp-svgrepo-com.svg'
import { useNavigate } from "react-router-dom";

const services = [
  "Brendinq",
  "Sosial media dizaynı",
  "Çap məhsulları dizaynı",
  "Loqo dizaynı",
  "Reklam materiallarının dizaynı",
  "Paketləmə dizaynı",
  "Motion dizaynı",
];

const AboutBtns = () => {
  const mainBtnData = services.slice(0, 3);
  const secondaryBtnData = services.slice(3, services.length);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop positions
  const desktopPositions = [
    { x: -110, y: 95, rotation: -20 },
    { x: -100, y: 244, rotation: 0 },
    { x: 110, y: 92, rotation: 10 },
    { x: 70, y: 248, rotation: 2 },
    { x: -20, y: 190, rotation: 0 },
    { x: 28, y: 28, rotation: -4 },
    { x: 0, y: 140, rotation: -3 },
  ];

  // Mobile positions
  const mobilePositions = [
    { x: -20, y: 12, rotation: -15 },
    { x: -20, y: 30, rotation: 0 },
    { x: 28, y: 25, rotation: 8 },
    { x: 22, y: 23, rotation: 2 },
    { x: 15, y: 36, rotation: 0 },
    { x: 12, y: 25, rotation: -3 },
    { x: 0, y: 35, rotation: -2 },
  ];

  const positions = isMobile ? mobilePositions : desktopPositions;

  const getRandomAnimation = (index: number) => {
    const position = positions[index];

    return {
      startX: Math.random() * (isMobile ? 100 : 200) - (isMobile ? 50 : 100),
      startY: -(
        Math.random() * (isMobile ? 300 : 500) +
        (isMobile ? 200 : 400)
      ),
      duration: Math.random() * 0.6 + 0.6,
      delay: Math.random() * 1.5,
      rotation: Math.random() * 720 - 360,
      finalX:
        position.x +
        (Math.random() * (isMobile ? 10 : 15) - (isMobile ? 5 : 7.5)),
      finalY:
        position.y +
        (Math.random() * (isMobile ? 10 : 15) - (isMobile ? 5 : 7.5)),
      finalRotation: position.rotation + (Math.random() * 4 - 2),
      zIndex: Math.floor(Math.random() * 7) + 1,
    };
  };

  const [animations, setAnimations] = useState(() =>
    services.map((_, index) => getRandomAnimation(index))
  );

  useEffect(() => {
    if (isVisible) {
      setAnimations(services.map((_, index) => getRandomAnimation(index)));
    }
  }, [isMobile]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
 const navigate=useNavigate();
  return (
    <div
      ref={containerRef}
      className="w-[95%] md:w-[90%] lg:w-[45%] h-full p-3 md:p-5 relative md:h-screen flex items-end md:items-start justify-center overflow-hidden"
    >
      <div className="absolute top-5 md:top-5 left-1/2 -translate-x-1/2 text-center z-20">
       <div className="flex items-center gap-2"><HiPencil  className="text-xl md:text-3xl font-semibold text-[#1e1e1e]"/> <h2 className="text-xl md:text-3xl font-poppins font-semibold text-black">
          Əlaqə üçün
        </h2></div>
        <p className="text-sm md:text-base text-gray-500 mt-2 text-left font-poppins font-normal">
              Əgər işlərim sənin zövqünə uyğundursa, zövqlərimiz üst-üstə
              düşürsə, bu fürsəti birgə dəyərləndirək!
        </p>
        <p className="text-base md:text-lg text-gray-600 mt-2 text-left font-poppins font-semibold">parvin.gasimova@inbox.ru </p>
        <p className="text-sm md:text-base text-gray-600 mt-2 text-left flex gap-2 font-poppins font-normal">
          <img 
          src={whatsapp} 
          alt="WhatsApp" 
          loading="lazy"
          className="w-6 h-6" /> (+994)50 554 75 68</p>
      </div>
      <div className="relative w-full min-h-[200px] d-none lg:d-block md:min-h-[550px] flex items-end justify-center">
        {mainBtnData.map((service, index) => (
          <div
            key={index}
            className={`absolute transition-all ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: "50%",
              top: "50%",
              transform: isVisible
                ? `translate(calc(-50% + ${animations[index].finalX}px), calc(-50% + ${animations[index].finalY}px)) rotate(${animations[index].finalRotation}deg)`
                : `translate(calc(-50% + ${animations[index].startX}px), calc(-50% + ${animations[index].startY}px)) rotate(${animations[index].rotation}deg)`,
              transitionDuration: `${animations[index].duration}s`,
              transitionDelay: `${animations[index].delay}s`,
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: animations[index].zIndex,
            }}
          >
            <button
              onClick={()=>{navigate("/portfolio")}}
              className="hidden md:block outline-none border-none bg-black text-white  rounded-[30px] px-6 h-[40px] md:px-4 md:py-2 text-xs md:text-base font-normal font-poppins cursor-pointer"
            >
             {service}
            </button>
            {/* <MainButton text={service} onClick={() => ""} className="!w-28  !text-[10px] md:text-sm" /> */}
          </div>
        ))}
        {secondaryBtnData.map((service, index) => {
          const animIndex = mainBtnData.length + index;
          return (
            <div
              key={index}
              className={`absolute transition-all ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                left: "50%",
                top: "50%",
                transform: isVisible
                  ? `translate(calc(-50% + ${animations[animIndex].finalX}px), calc(-50% + ${animations[animIndex].finalY}px)) rotate(${animations[animIndex].finalRotation}deg)`
                  : `translate(calc(-50% + ${animations[animIndex].startX}px), calc(-50% + ${animations[animIndex].startY}px)) rotate(${animations[animIndex].rotation}deg)`,
                transitionDuration: `${animations[animIndex].duration}s`,
                transitionDelay: `${animations[animIndex].delay}s`,
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                zIndex: animations[animIndex].zIndex,
              }}
            >
              {/* <SecondryBtn text={service} onClick={() => ""}   className="!w-28  !text-[10px] md:text-sm"/> */}
               <button
              onClick={()=>{navigate("/portfolio")}}
              className="hidden md:block outline-none border bg-white  text-black rounded-[30px] px-6 h-[40px] md:px-4 md:py-2 text-xs md:text-base font-normal font-poppins cursor-pointer"
            >
             {service}
            </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutBtns;
