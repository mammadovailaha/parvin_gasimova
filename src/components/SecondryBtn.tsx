interface btnProps {
  text: string;
  onClick: () => void;
}
const SecondryBtn = ({ text, onClick }: btnProps) => {
  return (
  <button
      onClick={onClick}
      className="relative inline-block bg-transparent border border-gray-200 outline-none rounded-[30px] tracking-normal overflow-hidden group h-12 px-6"
    >
      {/* Ön tərəf */}
      <span className="block transition-all duration-500 group-hover:-translate-y-full text-black text-xs lg:text-base font-normal lg:leading-12">
        {text}
      </span>
      {/* Arxa tərəf */}
      <span className="absolute  top-full block transition-all duration-500 group-hover:top-0 text-black text-xs lg:text-base font-normal lg:leading-12">
        {text}
      </span>
    </button>
  )
}

export default SecondryBtn
