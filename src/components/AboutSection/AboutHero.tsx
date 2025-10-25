// import { FaLocationDot } from "react-icons/fa6";
import mainPhoto from "../../assets/images/pp about.png";
// import SecondryBtn from "../SecondryBtn";

const AboutHero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full p-10 mt-15 ">
      <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-5">
        <div className="w-full md:[40%] lg:w-[45%] flex flex-col gap-4">
          <p className="font-normal font-poppins text-base md:text-2xl text-[#1E1E1E]">
            <b className="font-poppins font-semibold">Salam! Mən Pərvin Qasımova, qrafik dizaynerəm. </b>Artıq 2 ildir bu
            sahədə çalışıram və yalnız qrafik dizaynla məhdudlaşmıram — eyni
            zamanda motion dizayner kimi də fəaliyyət göstərirəm. <br />
            Brendlərə fərqli sosial media postları, axıcı motion dizaynlar, çap
            məhsulları və brend kimliyini yaradıram. Hər layihədə məqsədim
            brendlərin vizual dilini gücləndirmək, mesajını düzgün çatdırmaq və
            estetik, yadda qalan nəticələr yaratmaqdır. 
          </p>
        </div>
        <div className="w-[250px] md:w-[55%] lg:w-[30%] h-[250px] lg:h-[440px] rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={mainPhoto}
            alt="Peşəkar Qrafik Dizayner"
          />
        </div>
      </div>
      {/* <div className="flex justify-center items-center w-full gap-10">
        <SecondryBtn text="Mənimlə əlaqə" onClick={() => {}} />
        <div className="h-[1px] w-[65%] bg-gray-200 hidden md:block" />
        <div className="flex justify-center items-center gap-2">
          <FaLocationDot />
          <p className="text-[#1E1E1E] text-md md:text-lg font-regular">
            Bakı, Azərbaycan
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default AboutHero;
