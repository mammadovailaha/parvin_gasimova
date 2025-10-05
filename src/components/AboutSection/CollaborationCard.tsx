import type { FC } from "react";

interface Props {
  img: string;
}   
const CollaborationCard:FC<Props> = ({ img }) => {
  return (
    <div className="w-[150px] md:w-[200px] h-[100px] md:h-[150px] flex justify-center items-center rounded-lg p-4  transition-shadow duration-300">
      <img src={img} alt="Əməkdaş" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" />
    </div>
  )
}

export default CollaborationCard
