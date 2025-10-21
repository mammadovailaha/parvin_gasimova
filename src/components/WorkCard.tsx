import { useState } from "react";
import type { Work } from "../types/portfolio";

interface WorkCardProps {
  work: Work;
}

const WorkCard = ({ work }: WorkCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = work.images || [];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer w-full flex justify-center"
    >
      <div className="relative w-[80%] md:w-full h-[380px] rounded-lg overflow-hidden bg-gray-200/90 shadow-md">
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`Work ${work.id} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-300"
          />
        )}

        {/* Hover overlay - şəkillərin sayı */}
        {isHovered && images.length > 0 && (
          <div className="absolute inset-0 bg-[#000]/30 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {currentImageIndex + 1} / {images.length}
            </span>
          </div>
        )}

        {/* Slider butonları */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gray-200"
            >
              ←
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gray-200"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Şirkət adı */}
      {/* <div className="mt-3">
        <h3 className="text-lg font-semibold text-black">{work.company}</h3>
        <p className="text-sm text-gray-600">{work.year}</p>
      </div> */}
    </div>
  );
};

export default WorkCard;