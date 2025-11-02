import slide1 from "../../assets/protfolio/esederek/1.png";
import slide2 from "../../assets/protfolio/esederek/2.png";
import slide3 from "../../assets/protfolio/esederek/3.png";
import slide4 from "../../assets/protfolio/esederek/4.png";
import slide5 from "../../assets/protfolio/esederek/5.png";
import slide6 from "../../assets/protfolio/esederek/6.png";
import slide7 from "../../assets/protfolio/esederek/7.png";
import slide8 from "../../assets/protfolio/esederek/8.png";
import slide9 from "../../assets/protfolio/esederek/9.png";


const ImagesSection = () => {
  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
  ];
  const column1 = images.slice(0, 3);
  const column2 = images.slice(3, 6);
  const column3 = images.slice(6, 9);

  return (
    <div className="w-[95%] h-auto flex justify-center items-center gap-5 px-2 rounded-[40px] bg-black overflow-y-srcoll scrollbar-hide  animate-slide-in">
      {/* Column 1 */}
    <div className="w-full h-full flex flex-wrap justify-center items-center  gap-3 md:gap-5 overflow-hidden py-2 rounded-[40px]">
          <div
        style={{
          overflowY: "scroll",
          msOverflowStyle: "none", 
          scrollbarWidth: "none", 
        }}
        className="w-[340px] h-[730px] overflow-y-scroll   hide-scrollbar flex flex-col justify-center items-center gap-4  md:px-2 md:mt-4 md:pt-28 rounded-[40px]"
      >
        {column1.map((imgSrc, index) => (
          <div key={index} className="w-[100%] h-[420px] rounded-[20px]">
            <img
              className="w-full h-full object-cover rounded-[20px]"
              src={imgSrc}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Column 2 */}
      <div
        style={{
          overflowY: "scroll",
          msOverflowStyle: "none",
          scrollbarWidth: "none", 
        }}
        className="w-[340px] h-[730px] overflow-y-scroll   hide-scrollbar flex flex-col justify-center items-center gap-4  bg-black md:mt-4 md:pt-28 rounded-[40px]"
      >
        {column2.map((imgSrc, index) => (
          <div key={index} className="w-[100%] h-[420px] rounded-[20px]">
            <img
              className="w-full h-full object-cover rounded-[20px]"
              src={imgSrc}
              alt={`Image ${index + 4}`}
            />
          </div>
        ))}
      </div>

      {/* Column 3 */}
      <div
        style={{
          overflowY: "scroll",
          msOverflowStyle: "none", // IE və Edge üçün
          scrollbarWidth: "none", // Firefox üçün
        }}
        className="w-[340px] h-[730px] overflow-y-scroll   hide-scrollbar flex flex-col justify-center items-center gap-4 md:mt-4 md:pt-28 rounded-[40px]"
      >
        {column3.map((imgSrc, index) => (
          <div key={index} className="w-[100%] h-[440px] rounded-[20px]">
            <img
              className="w-full h-full object-cover rounded-[20px]"
              src={imgSrc}
              alt={`Image ${index + 7}`}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImagesSection;
