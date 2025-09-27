import { type FC } from "react";
import { portfolioData } from "../../data/portfolioData";
import PortfolioCard from "../PortfolioCard";
interface Props {
  serviceName: string;
  serviceImage: string;
  company?: string;
  serviceId: number;
  workId: number;
}
const ProtfolioSection: FC<Props> = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-10 my-6 md:my-10 overflow-hidden py-18 md:pt-24">
      <h2 className="text-4xl font-bold leading-10 text-[#1E1E1E]">Portfolio</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {portfolioData.map((item, idx) => (
          <PortfolioCard
            key={idx}
            serviceName={item.serviceName}
            serviceImage={item.serviceImage}
            serviceId={item.id}
            workId={item.works[0]?.id || 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProtfolioSection;
