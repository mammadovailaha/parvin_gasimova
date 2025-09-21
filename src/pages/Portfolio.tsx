import ProtfolioCard from '../components/ProtfolioCard';
import brandBook from "../assets/protfolio/brandbook/brandbook/emeyveli bb1900x900/emeyveli bb-25.png"
import smmPost from "../assets/protfolio/sanan-asadzade-mmc/sanan asadzade mmc/13.png"
import banner from "../assets/protfolio/esederek/banners/esas banner.png"
import banner1 from "../assets/protfolio/brandbook/brandbook/karibu brandbook/brand guidline -01.png"

 const portfolioData = [
  { serviceName: "Brandbook", serviceImage: brandBook, company: "Emeyveli" },
  { serviceName: "SMM post", serviceImage: smmPost, company: "Sanan Asadzade MMC" },
  { serviceName: "Banner", serviceImage: banner, company: "Esederek" },
  { serviceName: "Banner", serviceImage: banner1, company: "Karibu" },

];

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
          company={item.company}
        />
      ))}
      </div>
    </div>
  )
}

export default Portfolio