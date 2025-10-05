import  { useRef, useEffect, useState } from 'react'
import MainButton from '../MainButton'
import SecondryBtn from '../SecondryBtn';

const services = [
  "Brendinq",
  "Sosial media dizaynı", 
  "Çap məhsulları dizaynı",
  "Loqo dizaynı",
  "Reklam materiallarının dizaynı",
  "Paketləmə dizaynı",
  "Motion dizaynı",
]

const AboutBtns = () => {
  const mainBtnData = services.slice(0, 3);
  const secondaryBtnData = services.slice(3, services.length);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran ölçüsünü yoxla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop pozisiyalar
  const desktopPositions = [
    { x: -110, y: 95, rotation: -20},
    { x: -100, y: 244, rotation: 0 },
    { x: 110, y: 92, rotation: 10 },
    { x: 70, y: 248, rotation: 2 },
    { x: -20, y: 190, rotation: 0 },
    { x: 28, y: 28, rotation: -4 },
    { x: 0, y: 140, rotation: -3 },
  ];

  // Mobile pozisiyalar (daha kiçik və sıx)
  const mobilePositions = [
    { x: -80, y: 20, rotation: -15},
    { x: -30, y: 50, rotation: 0 },
    { x: 45, y: 35, rotation: 8 },
    { x: 35, y: 33, rotation: 2 },
    { x: 15, y: 65, rotation: 0 },
    { x: 18, y: 25, rotation: -3 },
    { x: 0, y: 75, rotation: -2 },
  ];

  const positions = isMobile ? mobilePositions : desktopPositions;

  const getRandomAnimation = (index: number) => {
    const position = positions[index];
    
    return {
      startX: Math.random() * (isMobile ? 100 : 200) - (isMobile ? 50 : 100),
      startY: -(Math.random() * (isMobile ? 300 : 500) + (isMobile ? 200 : 400)),
      duration: Math.random() * 0.6 + 0.6,
      delay: Math.random() * 1.5,
      rotation: Math.random() * 720 - 360,
      finalX: position.x + (Math.random() * (isMobile ? 10 : 15) - (isMobile ? 5 : 7.5)),
      finalY: position.y + (Math.random() * (isMobile ? 10 : 15) - (isMobile ? 5 : 7.5)),
      finalRotation: position.rotation + (Math.random() * 4 - 2),
      zIndex: Math.floor(Math.random() * 7) + 1,
    };
  };

  const [animations, setAnimations] = useState(() => 
    services.map((_, index) => getRandomAnimation(index))
  );

  // Ekran ölçüsü dəyişəndə animasiyaları yenilə
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

  return (
    <div 
      ref={containerRef} 
      className='w-[95%] md:w-[90%] lg:w-[45%] h-full p-3 md:p-5 relative min-h-[350px] md:min-h-[550px] flex items-end justify-center overflow-hidden'
    >
      {mainBtnData.map((service, index) => (
        <div
          key={index}
          className={`absolute transition-all ${
            isVisible 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
          style={{
            left: '50%',
            top: '50%',
            transform: isVisible 
              ? `translate(calc(-50% + ${animations[index].finalX}px), calc(-50% + ${animations[index].finalY}px)) rotate(${animations[index].finalRotation}deg)` 
              : `translate(calc(-50% + ${animations[index].startX}px), calc(-50% + ${animations[index].startY}px)) rotate(${animations[index].rotation}deg)`,
            transitionDuration: `${animations[index].duration}s`,
            transitionDelay: `${animations[index].delay}s`,
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            zIndex: animations[index].zIndex,
          }}
        >
          <MainButton text={service} onClick={() => ("")} />
        </div>
      ))}
      {secondaryBtnData.map((service, index) => {
        const animIndex = mainBtnData.length + index;
        return (
          <div
            key={index}
            className={`absolute transition-all ${
              isVisible 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
            style={{
              left: '50%',
              top: '50%',
              transform: isVisible 
                ? `translate(calc(-50% + ${animations[animIndex].finalX}px), calc(-50% + ${animations[animIndex].finalY}px)) rotate(${animations[animIndex].finalRotation}deg)` 
                : `translate(calc(-50% + ${animations[animIndex].startX}px), calc(-50% + ${animations[animIndex].startY}px)) rotate(${animations[animIndex].rotation}deg)`,
              transitionDuration: `${animations[animIndex].duration}s`,
              transitionDelay: `${animations[animIndex].delay}s`,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: animations[animIndex].zIndex,
            }}
          >
            <SecondryBtn text={service} onClick={() => ("")} />
          </div>
        );
      })}
    </div>
  )
}

export default AboutBtns;