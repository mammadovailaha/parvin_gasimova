import { useState } from "react";
import type { Work } from "../types/portfolio";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

interface WorkCardProps {
  work: Work;
}

const WorkCard = ({ work }: WorkCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = work.images || [];

  const isVideo = (media: string) => {
    return (
      media.endsWith(".mp4") ||
      media.endsWith(".webm") ||
      media.endsWith(".mov")
    );
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (images.length === 0) {
    return (
      <div className="relative w-full h-[430px] lg:h-[380px] rounded-lg overflow-hidden bg-gray-200/90 shadow-md flex items-center justify-center">
        <p className="text-gray-600">Şəkil yoxdur</p>
      </div>
    );
  }

  const currentMedia = images[currentImageIndex];
  const isCurrentVideo = isVideo(currentMedia);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer w-full flex justify-center"
    >
      <div className="relative w-[84%] lg:w-full rounded-lg overflow-hidden bg-gray-200/90 shadow-md">
        {/* Video */}
        {isCurrentVideo ? (
          <div className="w-full h-[450px] md:h-[490px] lg:h-[470px]">
             <video
            src={currentMedia}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            key={currentImageIndex}
          />
          </div>
         
        ) : (
          /* Image */
          <div className="w-full h-[380px] md:h-[500px] lg:h-[390px]">
             <img
            src={currentMedia}
            alt={`Work ${work.id} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
            key={currentImageIndex}
          />
          </div>
         
        )}

        {/* Slider buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 text-black p-1 rounded-full hover:bg-white transition-colors z-10"
            >
              <FaAngleDoubleLeft size={14} />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 text-black p-1 rounded-full hover:bg-white transition-colors z-10"
            >
              <FaAngleDoubleRight size={14} />
            </button>

            {/* Image counter */}
            {isHovered && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WorkCard;