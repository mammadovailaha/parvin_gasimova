import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/kruq.png"
import MainButton from "../MainButton";
import SecondryBtn from "../SecondryBtn";

const InfoSection = () => {
  const navigate=useNavigate();
  return (
    <div className="w-full h-[50%] flex flex-col md:flex-row justify-around items-center px-10 mt-15 gap-4 animate-fade-in-up">
      <div className="w-[185px] h-[185px]">
        <img
        className="w-full h-full object-contain animate-slow-spin"
          src={Logo}
          alt="loqo"
        />
      </div>
      <div className="w-[90%] md:w-[50%] h-full flex flex-col justify-center items-start gap-2">
        <p className="font-poppins font-semibold text-3xl md:text-5xl text-black z-40 relative bg-gradient-to-r from-black to-gray-200 bg-clip-text text-transparent inline-block animate-gradient-text">
          Brendlərə yaradıcı innovasiya və strateji planlama ilə rəqəmsal
          ustalığa çatmaqda kömək edirəm
        </p>
        <div className="w-full h-auto flex justify-start items-center gap-4 mt-4">
            <MainButton text="Mənimlə əlaqə" onClick={() => {navigate("/contact")}}/>
            <SecondryBtn text="Mənim portfoliom" onClick={() => {navigate("/portfolio")}}/>
        </div>
      </div>
    </div>
  )
}

export default InfoSection;
