import type { FC } from "react";
type T = /*unresolved*/ any
interface slideProps{
  className:string;
  data:Array<T>;
  textStyle:string;
  onClick:()=>void;
}

const SliderComponent:FC<slideProps> = ({className, data, textStyle, onClick}) => {
  return (
    <div className={` w-full h-20 bg-white  dark:bg-gray-900 px-4 py-2 overflow-hidden flex items-center justify-center `}>
      <div className={` ${className} relative w-full max-w-7xl overflow-hidden rounded-[30px] `}>
        <div className='animate-slide flex space-x-8 px-10 py-3 md:py-5 gap-22'>
          {/* İlk dəfə göstərilən elementlər */}
          {data.map((item, index) => (
            <span 
              key={`first-${index}`} 
              className={`${textStyle} whitespace-nowrap `}
              onClick={onClick}
            >
              {item}
            </span>
          ))}
          {/* Seamless loop üçün elementlərin təkrarı */}
          {data.map((item, index) => (
            <span 
              key={`second-${index}`} 
              className={`${textStyle} whitespace-nowrap `}
              onClick={onClick}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-slide {
          animation: slide 13s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default SliderComponent