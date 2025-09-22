// src/pages/PortfolioDetail.tsx
import { type FC, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { portfolioData } from '../data/portfolioData';
import type { Work } from '../types/portfolio';

interface Props {
  project?: string;
  category?: string;
  year?: string;
  about?: string;
}

// Ayrıca komponent hər şəkil üçün
const ImageWithScroll: FC<{ image: string; alt: string; index: number }> = ({ image, alt}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const element = imageRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Şəkil viewport-a girəndə 0, çıxanda 1 olur
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Daha yaxşı hesablama
      const visiblePercent = Math.max(0, Math.min(1, 
        (windowHeight - elementTop + elementHeight) / (windowHeight + elementHeight)
      ));
      
      setScrollProgress(visiblePercent);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scale: 0.7 başlangıcda, 1.1-ə qədər böyüyür
  const scale = 0.9 + (scrollProgress * 0.4); // 0.7 → 1.1
  
  // Y oxu hərəkəti: şəkil aşağıdan yuxarı gəlir
  const translateY = (1 - scrollProgress) * 80 - 30; // 50px → -30px
  
  // // Rotation: kiçik fırlanma
  // const rotation = scrollProgress * 275 * (index + 1);

  return (
    <div ref={imageRef} className="w-full  flex justify-center mb-20 rounded-[35deg] ">
      <div 
        className="w-[300px] md:w-[500px] lg:w-[1000px] rounded-[45px] py-3 px-8 shadow-lg"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          transition: 'transform 0.1s ease-out',
          opacity: Math.max(0.4, scrollProgress + 0.2)
        }}
      >
        <img 
          className="w-full h-auto object-cover rounded-lg " 
          src={image} 
          alt={alt}
          style={{
            // transform: `rotate(${rotation}deg)  `,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
    </div>
  );
};

const PortfolioDetail: FC<Props> = ({ project, category, year, about }) => {
  const { serviceId, workId } = useParams();
  const [currentWork, setCurrentWork] = useState<(Work & { serviceName?: string }) | null>(null);

  useEffect(() => {
    if (serviceId && workId) {
      const service = portfolioData.find(s => s.id === parseInt(serviceId));
      if (service) {
        const work = service.works.find(w => w.id === parseInt(workId));
        if (work) {
          setCurrentWork({
            ...work,
            serviceName: service.serviceName
          });
        }
      }
    }
  }, [serviceId, workId]);

  // Use either URL params data or props
  const displayProject = currentWork?.ProjectName || project || "Project Name";
  const displayCategory = currentWork?.serviceName || category || "Category";
  const displayYear = currentWork?.year || year || "2025";
  const displayAbout = currentWork?.about || about || "Project description";
  const displayImages = currentWork?.images || currentWork?.image || ["https://i.postimg.cc/qq7GJMbF/brand-guidline-02.png"];

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10 my-10 pt-24 px-4">
      {/* info */}
      <div className="w-full h-[calc(100vh-30vh)]  lg:h-[calc(100vh-50vh)] max-w-6xl flex flex-col lg:flex-row justify-start items-start gap-5 md:gap-10">
        <div className=" flex flex-row lg:flex-col items-start justify-center lg:justify-start gap-10 md:gap-2.5 min-w-0 flex-shrink-0 px-10 lg:px-0">
          <div className="flex flex-col items-start justify-start gap-2">
            <h5 className="text-lg font-medium font-semibold text-black">Layihə</h5>
            <p className="text-base text-normal text-gray-600">{displayProject}</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <h5 className="text-lg font-medium font-semibold text-black">Kategoriya</h5>
            <p className="text-base text-normal text-gray-600">{displayCategory}</p>
          </div>
        </div>
        <div className="w-full lg:w-[80%] flex flex-col gap-5 flex-1 min-w-0 px-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <p className="text-lg font-medium font-semibold text-black">Layihə haqqında</p>
            <p className="text-base text-normal text-gray-600">{displayYear}</p>
          </div>
          <div className="w-[90%]">
            <p className="text-base text-gray-700 leading-relaxed text-center">{displayAbout}</p>
          </div>
        </div>
      </div>
      
      <div className="w-full  max-w-6xl flex flex-col gap-5 md:gap-8 overflow-hidden">
        {currentWork?.type === 'video' && currentWork.video ? (
          <div className="flex justify-center">
            <div className="w-full">
              <video 
                className="w-full h-auto object-contain rounded-lg shadow-lg" 
                src={currentWork.video}
                controls
                autoPlay
                muted
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ) : (
          displayImages.map((image, index) => (
            <ImageWithScroll 
              key={index}
              image={image}
              alt={`${displayProject} - Image ${index + 1}`}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PortfolioDetail;