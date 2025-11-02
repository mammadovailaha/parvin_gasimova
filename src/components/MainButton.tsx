import type { FC } from "react";

interface btnProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const MainButton: FC<btnProps> = ({ text, onClick, disabled, className, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} relative inline-block bg-black border-none outline-none rounded-[30px] tracking-normal  group h-12 px-4 md:px-6`}
    >
 
      <span  className="block transition-all duration-500 group-hover:-translate-y-full text-white text-xs lg:text-base font-normal lg:leading-12">
        {text}
      </span>
      {/* Arxa tərəf */}
      <span className="absolute font-poppins font-normal left-0 right-0 top-full block transition-all duration-500 group-hover:top-0 text-white text-sm md:text-base font-normal leading-[48px] text-center w-full">
        {text}
      </span>
    </button>
  );
};

export default MainButton;