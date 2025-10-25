import { type FC } from "react";

interface ExprinceCardProps {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
}

const ExprinceCard: FC<ExprinceCardProps> = ({
  startDate,
  endDate,
  position,
  company,
}) => {
  return (
    <div className="flex justify-start gap-5 md:gap-10 border-b  border-gray-200 py-2 md:py-4 w-[95%] md:w-[80%]">
      <div className="flex justify-start items-center w-[25%]">
        <p className="text-[10px] md:text-sm text-gray-400 font-poppins font-normal">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <h3 className="text-base md:text-2xl font-poppins font-semibold">{position}</h3>
        <p className="text-sm md:text-lg text-gray-400 font-poppins font-normal">{company}</p>
      </div>
    </div>
  );
};

export default ExprinceCard;
