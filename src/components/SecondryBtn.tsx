import React from 'react'

interface btnProps {
  text: string;
  onClick: () => void;
}
const SecondryBtn = ({ text, onClick }: btnProps) => {
  return (
  <button
      onClick={onClick}
      className="relative inline-block bg-transparent border border-gray-200 outline-none rounded-[30px] tracking-normal overflow-hidden group min-w-20 h-12 px-6"
    >
      {/* Ön tərəf */}
      <span className="block transition-all duration-500 group-hover:-translate-y-full text-black text-sm md:text-base font-normal leading-[48px]">
        {text}
      </span>
      {/* Arxa tərəf */}
      <span className="absolute  top-full block transition-all duration-500 group-hover:top-0 text-black text-sm md:text-base font-normal leading-[48px]">
        {text}
      </span>
    </button>
  )
}

export default SecondryBtn
