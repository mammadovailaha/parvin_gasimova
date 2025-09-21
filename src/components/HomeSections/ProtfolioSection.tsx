
// data/portfolioData.ts
import ProtfolioCard from '../ProtfolioCard';
import MainButton from '../MainButton';
import { useNavigate } from 'react-router-dom';
import brandBook from "../../assets/protfolio/brandbook/brandbook/emeyveli bb1900x900/emeyveli bb-25.png"
import smmPost from "../../assets/protfolio/sanan-asadzade-mmc/sanan asadzade mmc/13.png"
import banner from "../../assets/protfolio/esederek/banners/esas banner.png"
import banner1 from "../../assets/protfolio/brandbook/brandbook/karibu brandbook/brand guidline -01.png"

 const portfolioData = [
  { serviceName: "Brandbook", serviceImage: brandBook, company: "Emeyveli" },
  { serviceName: "SMM post", serviceImage: smmPost, company: "Sanan Asadzade MMC" },
  { serviceName: "Banner", serviceImage: banner, company: "Esederek" },
  { serviceName: "Banner", serviceImage: banner1, company: "Karibu" },

];
const PortfolioSection = () => {
    const portfolio = portfolioData.slice(0, 4)
    const navigate=useNavigate();
   const handleClick=()=>{
navigate("/Portfolio");
   }
  return (
<div className='w-full flex flex-col items-center gap-10 py-10' >
    <h2 className='text-6xl font-bold text-black '>worksss</h2>
    <div className=' w-full flex flex-wrap justify-center gap-10'>
        {portfolio.map((item, idx) => (
        <ProtfolioCard
          key={idx}
          serviceName={item.serviceName}
          serviceImage={item.serviceImage}
          company={item.company}
        />
      ))}
      </div>
<MainButton text='Daha çox' onClick={handleClick} />
</div>
      
  )
}

export default PortfolioSection


