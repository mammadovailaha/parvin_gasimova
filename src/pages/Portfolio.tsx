// src/pages/Portfolio.tsx
import ProtfolioCard from '../components/ProtfolioCard';
import { portfolioData } from '../data/portfolioData';

const Portfolio = () => {
  return (
    <div className='w-full flex flex-col items-center gap-6 md:gap-10 my-6 md:my-10 overflow-hidden py-18 md:pt-24'>
      <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white">Featured work</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        {portfolioData.map((item, idx) => (
          <ProtfolioCard
            key={idx}
            serviceName={item.serviceName}
            serviceImage={item.serviceImage}
            serviceId={item.id}
            workId={item.works[0]?.id || 1}
          />
        ))}
      </div>
    </div>
  )
};

export default Portfolio;