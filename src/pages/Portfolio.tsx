import { type FC } from "react";
import { portfolioData } from "../data/portfolioData";
import PortfolioSection from "../components/HomeSections/ProtfolioSection";

const Portfolio: FC = () => {
  // Debug console log
  console.log("=== PORTFOLIO DATA DEBUG ===");
  console.log("portfolioData:", portfolioData);
  portfolioData.forEach((item, idx) => {
    console.log(`Item ${idx}:`, {
      id: item.id,
      name: item.serviceName,
      isBranding: item.isBranding,
      hasWorks: item.works?.length,
      hasBrandings: item.brandings?.length,
      serviceImage: item.serviceImage,
    });
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <PortfolioSection />
    </div>
  );
};

export default Portfolio;