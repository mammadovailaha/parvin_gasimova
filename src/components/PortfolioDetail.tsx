import { type FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import type { Work } from "../types/portfolio";

const CarouselDetail: FC = () => {
  const { serviceId, workId } = useParams();
  const navigate = useNavigate();
  const [currentWork, setCurrentWork] = useState<Work | null>(null);
  const [allWorks, setAllWorks] = useState<Work[]>([]);
  const [serviceName, setServiceName] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (serviceId && workId) {
      const service = portfolioData.find((s) => s.id === parseInt(serviceId));
      if (service?.works) {
        const work = service.works.find((w) => w.id === parseInt(workId));
        if (work) {
          setCurrentWork(work);
          setAllWorks(service.works);
          setServiceName(service.serviceName);
          setCurrentImageIndex(0);
        } else {
          navigate("/portfolio");
        }
      } else {
        navigate("/portfolio");
      }
    }
  }, [serviceId, workId, navigate]);

  if (!currentWork) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Yüklənir...</p>
      </div>
    );
  }

  const displayImages = currentWork.images || [];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === displayImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleWorkChange = (workId: number) => {
    navigate(`/portfolio/${serviceId}/${workId}`);
    setCurrentImageIndex(0);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navbar - Bütün işlər */}
      <div className="w-full bg-gray-50 py-6 border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {allWorks.map((work) => (
              <button
                key={work.id}
                onClick={() => handleWorkChange(work.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  currentWork.id === work.id
                    ? "bg-black text-white scale-105 shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {work.ProjectName}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        {/* Info Section */}
        <div className="flex flex-col lg:flex-row justify-start items-start gap-10 mb-16">
          <div className="flex flex-col gap-8 px-4 lg:px-0">
            <div className="flex flex-col gap-2">
              <h5 className="text-lg font-semibold text-black">Layihə</h5>
              <p className="text-base text-gray-600">{currentWork.ProjectName}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-lg font-semibold text-black">Kategoriya</h5>
              <p className="text-base text-gray-600">{serviceName}</p>
            </div>
          </div>

          <div className="w-full lg:w-[70%] flex flex-col gap-5 px-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <p className="text-lg font-semibold text-black">Layihə haqqında</p>
              <p className="text-base text-gray-600">{currentWork.year}</p>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              {currentWork.about}
            </p>
          </div>
        </div>

        {/* Media Content - Video və ya Carousel */}
        <div className="w-full flex justify-center">
          {currentWork.type === "video" && currentWork.video ? (
            // Video Display
            <div className="w-full max-w-4xl">
              <video
                className="w-full h-auto rounded-2xl shadow-2xl"
                src={currentWork.video}
                controls
                autoPlay
                muted
              >
                Video dəstəklənmir
              </video>
            </div>
          ) : displayImages.length > 0 ? (
            // Carousel Display
            <div className="w-full max-w-5xl">
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                {/* Main Image */}
                <img
                  src={displayImages[currentImageIndex]}
                  alt={`${currentWork.ProjectName} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Buttons */}
                {displayImages.length > 1 && (
                  <>
                    {/* Previous Button */}
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110 z-10"
                      aria-label="Əvvəlki şəkil"
                    >
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110 z-10"
                      aria-label="Sonrakı şəkil"
                    >
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Dots Navigation */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {displayImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                            idx === currentImageIndex
                              ? "bg-white scale-125"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                          aria-label={`Şəkil ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Counter */}
                    <div className="absolute top-6 right-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {currentImageIndex + 1} / {displayImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails (Optional) */}
              {displayImages.length > 1 && (
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                  {displayImages.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                        idx === currentImageIndex
                          ? "ring-4 ring-black scale-105"
                          : "ring-2 ring-gray-300 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Image Info */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Şəkil {currentImageIndex + 1} / {displayImages.length}
                </p>
              </div>
            </div>
          ) : (
            // No Content
            <div className="text-center text-gray-500 py-20">
              <p className="text-lg">Məzmun tapılmadı</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselDetail;
