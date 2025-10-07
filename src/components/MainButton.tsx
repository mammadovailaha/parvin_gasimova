import type { FC } from "react";

interface btnProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const MainButton: FC<btnProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="relative inline-block bg-black border-none outline-none rounded-[30px] tracking-normal overflow-hidden group h-12 px-6"
    >
      {/* Ön tərəf */}
      <span className="block transition-all duration-500 group-hover:-translate-y-full text-white text-sm md:text-base font-normal leading-[48px] text-center w-full">
        {text}
      </span>
      {/* Arxa tərəf */}
      <span className="absolute left-0 right-0 top-full block transition-all duration-500 group-hover:top-0 text-white text-sm md:text-base font-normal leading-[48px] text-center w-full">
        {text}
      </span>
    </button>
  );
};

export default MainButton;