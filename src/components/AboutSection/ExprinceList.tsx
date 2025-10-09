import { PiStarFourFill } from "react-icons/pi";
import ExprinceCard from "./ExprinceCard";

const experience = [
  {
    id: 1,
    company: "Saat Store mağazalar şəbəkəsi",
    position: "Qrafik dizayner",
    startDate: "Yanvar 2025",
    endDate: "Aprel 2025",
  },
  {
    id: 2,
    company: "Biatoms Academy",
    position: "Qrafik dizayner / mentor",
    startDate: "Noyabr 2024",
    endDate: "May 2025",
  },
  {
    id: 3,
    company: "Tripsee.az",
    position: "Qrafik dizayner",
    startDate: "Avqust 2024",
    endDate: "May 2025",
  },
  {
    id: 4,
    company: "Readeng Publishing nəşriyyat evi",
    position: "Qrafik dizayner",
    startDate: "Avqust 2024",
    endDate: "Sentiyabr 2024",
  },
  {
    id: 5,
    company: "Aseto Group Reklam Agentliyi",
    position: "Qrafik dizayner / təcrübəçi",
    startDate: "İyun 2024",
    endDate: " Avqust 2024",
  },
];

const ExprinceList = () => {
  return (
    <div className="w-[90%] md:w-[50%] flex flex-col gap-4 md:gap-5 mt-5 px-4 md:px-0">
      <div className="flex items-center justify-start gap-2 border-b  border-gray-200 pb-2 md:pb-4 w-[90%] md:w-[80%]">
        <PiStarFourFill className="text-[#1e1e1e] text-xl md:text-2xl" />
        <h2 className="text-xl md:text-3xl font-semibold text-[#1e1e1e]">
          Təcrübə
        </h2>
      </div>
      <div className="w-full flex flex-col gap-3 md:gap-5 w-full">
        {experience.map((exp) => (
          <ExprinceCard
            key={exp.id}
            startDate={exp.startDate}
            endDate={exp.endDate}
            company={exp.company}
            position={exp.position}
          />
        ))}
      </div>
    </div>
  );
};

export default ExprinceList;
