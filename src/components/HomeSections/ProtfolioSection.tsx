import { type FC } from "react";
import { portfolioData } from "../../data/portfolioData";
import PortfolioCard from "../PortfolioCard";

const PortfolioSection: FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-10 my-6 md:my-10 overflow-hidden py-18 md:pt-24 animate-slide-in">
      <h2 className="text-4xl font-bold leading-10 text-[#1E1E1E]">Portfolio</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {portfolioData.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;