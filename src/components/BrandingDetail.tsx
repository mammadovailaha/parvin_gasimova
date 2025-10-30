import { type FC, useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { BrandingWork } from "../types/portfolio";

const ImageWithScroll: FC<{ image: string; alt: string }> = ({ image, alt }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const element = imageRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const visiblePercent = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - elementTop + elementHeight) / (windowHeight + elementHeight)
        )
      );

      setScrollProgress(visiblePercent);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 0.9 + scrollProgress * 0.4;
  const translateY = (1 - scrollProgress) * 80 - 30;

  return (
    <div ref={imageRef} className="w-full flex justify-center mb-2 md:mb-20 mt-5">
      <div
        className="w-[90%]  md:w-[500px] lg:w-[1000px] rounded-lg py-3 px-8"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          transition: "transform 0.1s ease-out",
          opacity: Math.max(0.4, scrollProgress + 0.2),
        }}
      >
        <img className="w-full h-auto object-cover rounded-lg shadow-lg" src={image} alt={alt} />
      </div>
    </div>
  );
};

interface BrandingDetailProps {
  portfolioData: any[];
}

const BrandingDetail: FC<BrandingDetailProps> = ({portfolioData}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentBranding, setCurrentBranding] = useState<BrandingWork | null>(null);

  useEffect(() => {
    if (!slug) {
      navigate("/portfolio");
      return;
    }

    const brandingService = portfolioData.find((p) => p.isBranding);
    if (brandingService?.brandings) {
      const found = brandingService.brandings.find((b: { slug: string; }) => b.slug === slug);
      if (found) {
        setCurrentBranding(found);
      } else {
        navigate("/portfolio");
      }
    } else {
      navigate("/portfolio");
    }
  }, [slug, navigate]);

  if (!currentBranding) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Yüklənir...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white pt-18 md:pt-24">
      {/* Info Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-4 md:gap-10 mb-12">
          <div className="flex flex-col gap-5 md:gap-10 px-10 lg:px-0">
            <div className="flex flex-col gap-2">
              <h5 className="text-lg font-semibold text-black">Layihə</h5>
              <p className="text-base text-gray-600">{currentBranding.name}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-lg text-black font-poppins font-semibold">Kateqoriya</h5>
              <p className="text-base text-gray-600 font-poppins font-normal">{currentBranding.category || ""}</p>
            </div>
          </div>

          <div className="w-full lg:w-[80%] flex flex-col gap-5 px-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <p className="text-lg text-black font-poppins font-semibold">Layihə haqqında</p>
              <p className="text-base text-gray-600 font-poppins font-normal">2025</p>
            </div>
            <p className="text-base text-gray-700 leading-relaxed font-poppins font-normal">
             {currentBranding.about || ""}
            </p>
          </div>
        </div>

        {/* Images with scroll animation */}
        <div className="w-full flex flex-col gap-8">
          {currentBranding.images.map((image, index) => (
            <ImageWithScroll
              key={index}
              image={image}
              alt={`${currentBranding.name} - ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandingDetail;