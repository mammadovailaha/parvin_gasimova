import { type FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselCardProps {
  images: string[];
  title: string;
  description: string;
}

const CarouselCard: FC<CarouselCardProps> = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500">Şəkil yoxdur</div>;
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full max-w-4xl">
        <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-[4/5]">
          {currentImage ? (
            <img
              src={currentImage}
              alt={`${title} ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Şəkil yükləmə xətası:", currentImage);
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x1000?text=Image+Not+Found";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Şəkil yükləmə xətası</p>
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition z-10"
                aria-label="Əvvəlki"
              >
                <ChevronLeft size={24} className="text-black" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition z-10"
                aria-label="Sonrakı"
              >
                <ChevronRight size={24} className="text-black" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition ${
                      idx === currentIndex ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Şəkil ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <p className="text-sm text-gray-500 mt-4">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;