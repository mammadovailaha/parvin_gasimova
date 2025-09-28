import { FaLocationDot } from "react-icons/fa6"
import mainPhoto from "../../assets/images/MainPhoto.png"
import SecondryBtn from "../SecondryBtn"

const AboutHero = () => {
    return (
       <div className="flex flex-col justify-center items-center gap-8 w-full p-10 mt-16">
         <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-5">
            <div className="w-full md:[40%] lg:w-[45%] flex flex-col gap-4">
                <p className="font-bold text-base md:text-xl text-[#1E1E1E]"> Detallara önəm verən sosial media, çap və hərəkətli dizayn
                    sahəsində geniş təcrübəyə malik qrafik dizaynerəm.Adobe
                    proqramlarında peşəkar səviyyədə işləyir, brend tələblərinə
                    uyğun yaradıcı və effektiv dizayn həlləri təqdim edirəm. Komanda ilə
                    əməkdaşlıqda fəal iştirak edir, trendləri yaxından izləyərək öz
                    ideyalarımı dizaynlara uğurla tətbiq edirəm. <span className="font-bold text-xl text-gray-400">Kampaniyalar, bayram
                    postları, banner və roll-up materiallarından tutmuş, sosial media üçün
                    animasiyalı və statik dizaynlara qədər fərqli formatlarda müxtəlif işlər
                    təqdim edirəm. Daim öyrənməyə və inkişaf etməyə açığam.</span></p>
            </div>
            <div className="w-full md:w-[55%] lg:w-[30%] h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                <img 
                className="w-full h-full object-cover rounded-lg"
                src={mainPhoto}
                 alt="Peşəkar Qrafik Dizayner" />
            </div>
        </div>
        <div className="flex justify-center items-center w-full gap-10">
            <SecondryBtn text="Mənimlə əlaqə" onClick={() => {}}/>
             <div className="h-[1px] w-[65%] bg-gray-200 hidden md:block"/> 
            <div className="flex justify-center items-center gap-2"><FaLocationDot /><p className="text-[#1E1E1E] text-md md:text-lg font-regular">Bakı, Azərbaycan</p></div></div>
       </div>
    )
}

export default AboutHero

