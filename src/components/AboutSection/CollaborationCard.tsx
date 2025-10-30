import type { FC } from "react";

interface Props {
  img: string;
}   

const CollaborationCard: FC<Props> = ({ img }) => {
  return (
    <div className="mx-4 px-2">
      <div className="w-[160px] md:w-[180px] h-[100px] md:h-[120px] flex justify-center items-center rounded-lg p-3 transition-shadow duration-300">
        <img 
          src={img} 
          alt="Əməkdaş" 
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" 
        />
      </div>
    </div>
  )
}

export default CollaborationCard