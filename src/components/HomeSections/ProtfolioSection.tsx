
// data/portfolioData.ts
import brandBook from "../../assets/protfolio/wetransfer_brandbook_2025-09-19_2038/"
import ProtfolioCard from '../ProtfolioCard';
import MainButton from '../MainButton';
import { useNavigate } from 'react-router-dom';

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


