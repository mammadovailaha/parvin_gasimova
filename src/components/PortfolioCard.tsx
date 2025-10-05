import { useRef, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  serviceName: string;
  serviceImage: string;
  company?: string;
   serviceId: number;
  workId: number;
}
const ProtfolioCard: FC<Props> = ({ serviceName, serviceImage, company, serviceId, workId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
 const navigate = useNavigate();
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
    const handleCardClick = () => {
    navigate(`/portfolio/${serviceId}/${workId}`);
  };
  return (
    <div
    onClick={handleCardClick}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="w-[80%] lg:w-[40%] h-[200px]  md:h-[450px] flex flex-col items-center gap-2.5 rounded-[20px] relative rounded-[20px]"
    >
      <div
        className={`w-full flex py-4 justify-center items-center bg-white absolute top-[40%] overflow-hidden transition-all duration-700 ${
          isHovered ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-2xl font-semibold text-black">{serviceName}</p>
      </div>
      <div className="w-full h-[400px] rounded-[20px]  ">
        <img
          className="w-full h-full object-cover rounded-[20px]"
          src={serviceImage}
          alt={`${serviceName} sekli`}
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-base md:text-2xl font-semibold text-black ">{serviceName}</p>
        <p className="text-base md:text-2xl font-semibold text-black ">{company}</p>
      </div>

      {isHovered && (
        <div
          className="absolute w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center pointer-events-none z-30 transition-opacity duration-200"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <span className="text-black font-semibold text-sm">Ətraflı</span>
        </div>
      )}
    </div>
  );
};

export default ProtfolioCard;
