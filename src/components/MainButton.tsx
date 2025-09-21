import type { FC } from "react";

interface btnProps {
  text: string;
  onClick: () => void;
}

const MainButton: FC<btnProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-block bg-black border-none outline-none rounded-[30px] tracking-normal overflow-hidden group min-w-20 h-12 px-6"
    >
      {/* Ön tərəf */}
      <span className="block transition-all duration-500 group-hover:-translate-y-full text-white text-sm md:text-base font-normal leading-[48px]">
        {text}
      </span>
      {/* Arxa tərəf */}
      <span className="absolute  top-full block transition-all duration-500 group-hover:top-0 text-white text-sm md:text-base font-normal leading-[48px]">
        {text}
      </span>
    </button>
  );
};

export default MainButton;
