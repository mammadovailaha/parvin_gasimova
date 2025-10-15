import { type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Work } from "../types/portfolio";

interface Props {
  serviceId: number;
  works: Work[];
}

const PortfolioNav: FC<Props> = ({ serviceId, works }) => {
  const navigate = useNavigate();
  const { workId } = useParams();
  const currentWorkId = workId ? parseInt(workId) : works[0]?.id;

  return (
    <div className="w-full bg-gray-50 py-8 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {works.map((work) => (
            <button
              key={work.id}
              onClick={() => navigate(`/portfolio/${serviceId}/${work.id}`)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentWorkId === work.id
                  ? "bg-black text-white scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-200 hover:scale-105"
              }`}
            >
              {work.ProjectName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioNav;