import type { FC } from "react";

interface Props {
  img: string;
}

const CollaborationCard: FC<Props> = ({ img }) => {
  return (
    <div className="" >
      <div className="w-[140px] md:w-[180px] h-[100px] md:h-[120px] flex justify-center items-center rounded-lg p-3 transition-shadow duration-300">
        <img
          src={img}
          alt="Əməkdaş"
          loading="lazy"
          className="w-full h-full object-cover lg:filter lg:grayscale lg:hover:grayscale-0 transition-all duration-300 px-2"
        />
      </div>
    </div>
  );
};

export default CollaborationCard;
