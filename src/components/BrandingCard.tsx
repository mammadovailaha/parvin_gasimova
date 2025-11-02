import { useNavigate } from "react-router-dom";
import type { BrandingWork } from "../types/portfolio";

interface BrandingCardProps {
  branding: BrandingWork;
}

const BrandingCard = ({ branding }: BrandingCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/portfolio/branding/${branding.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer"
    >
      <div className="relative w-full h-[250px] rounded-lg overflow-hidden bg-gray-200">
        <img
          src={branding.images[0]}
          alt={branding.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold text-lg">{branding.name}</p>
            <p className="text-white text-sm">{branding.images.length} şəkil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingCard;